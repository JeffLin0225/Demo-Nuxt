# Cloudflare R2 + D1 邊緣運算全端開發指南 (Nuxt 3)

## 1. 架構原則

| 原則 | 說明 |
|------|------|
| **各司其職** | D1 存結構化文字（名稱、價格、圖片路徑）；R2 存二進位檔案（圖片、影片、文件） |
| **輕量化路徑** | DB 僅存 R2 Object Key（路徑字串），不存檔案本體 |
| **無狀態** | API 快進快出，注意 Worker 記憶體限制 |

## 2. 環境綁定 (`wrangler.json`)

```json
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "your-db-name",
      "database_id": "your-db-id"
    }
  ],
  "r2_buckets": [
    {
      "binding": "MY_BUCKET",
      "bucket_name": "your-bucket-name"
    }
  ]
}
```

- Nuxt 3 後端透過 `event.context.cloudflare.env` 取得 `DB` 與 `MY_BUCKET`

## 3. 安全防護：檔名清洗 (`server/utils/sanitize.ts`)

```ts
export const sanitizeFileName = (fileName: string): string => {
  if (!fileName) return '';
  let cleanName = fileName.replace(/^.*[\\\/]/, '');       // 剔除路徑字元
  cleanName = cleanName.replace(/\s+/g, '-');               // 空白轉中折線
  cleanName = cleanName.replace(/[^a-zA-Z0-9.\-_\u4e00-\u9fa5]/g, ''); // 僅允許安全字元
  return cleanName;
};
```

> 防止 Directory Traversal 攻擊，確保 URL 相容性。

## 4. 後端：R2 + D1 聯合寫入 (`server/api/upload.post.ts`)

```ts
export default defineEventHandler(async (event) => {
  const { DB, MY_BUCKET } = event.context.cloudflare.env;

  const MAX_SIZE = 5 * 1024 * 1024;
  const contentLength = Number(getHeader(event, 'content-length') || 0);
  if (contentLength > MAX_SIZE) throw createError({ statusCode: 413, message: '檔案過大' });

  const formData = await readFormData(event);
  const file = formData.get('file') as File;
  if (!file || file.size > MAX_SIZE) throw createError({ statusCode: 400, message: '無效檔案' });

  const safeName = sanitizeFileName(file.name);
  const imageKey = `uploads/${Date.now()}-${crypto.randomUUID()}-${safeName}`;

  try {
    // R2 寫入
    await MY_BUCKET.put(imageKey, file, {
      httpMetadata: { contentType: file.type },
    });

    // D1 寫入路徑
    await DB.prepare("INSERT INTO products (name, img_url) VALUES (?, ?)")
      .bind(file.name, imageKey)
      .run();

    return { success: true, url: imageKey };
  } catch (err) {
    throw createError({ statusCode: 500, message: '儲存失敗' });
  }
});
```

## 5. 檔案讀取與前端呈現

透過 R2 Custom Domain + CDN 直接存取，不經 Worker 回傳檔案。

```
DB 儲存值：uploads/123-image.jpg
完整網址：https://assets.example.com/uploads/123-image.jpg
```

```vue
<img :src="`https://assets.example.com/${item.img_url}`" />
```

## 6. 注意事項

| 項目 | 規則 |
|------|------|
| **同名覆蓋** | `R2.put()` 同名路徑直接覆蓋不報錯，Key 必須加 UUID/Timestamp 保證唯一 |
| **正斜線** | R2 路徑與網址只認 `/`，禁用 `\` |
| **≤ 5MB** | 用 Worker Binding 中轉（本文模式） |
| **> 5MB** | 改用 Presigned URL，前端直接 PUT 到 R2，不經 Worker |
