# Cloudflare R2 檔案儲存整合指南 (Nuxt 4)

這份文件記錄了在 Nuxt 專案中整合 Cloudflare R2 物件儲存的核心觀念、API 操作與常見雷區。

---

## 1. R2 是什麼

Cloudflare R2 是 S3 相容的物件儲存服務，存放**二進位檔案**（圖片、影片、文件），特色是**零流出費用**。

| 項目 | 免費額度 |
|------|----------|
| 儲存 | 10 GB |
| A 類操作（寫入/列表） | 100 萬次/月 |
| B 類操作（讀取） | 1,000 萬次/月 |
| 流出費用 | **$0**（R2 最大賣點） |

### 架構原則：R2 + D1 各司其職

| 角色 | 職責 |
|------|------|
| **D1** | 存結構化文字（名稱、價格、圖片路徑字串） |
| **R2** | 存二進位檔案本體 |

> DB 僅存 R2 Object Key（路徑字串），不存檔案本體。查詢走 D1（SQL 靈活），下載走 R2。

---

## 2. 環境設定

### CLI 操作
```bash
# 建立 Bucket
npx wrangler r2 bucket create nuxt-demo-bucket

# 查看已有 buckets
npx wrangler r2 bucket list

# 查看 bucket 內物件
npx wrangler r2 object list nuxt-demo-bucket
```

### wrangler.json 綁定
```json
{
  "r2_buckets": [
    {
      "binding": "MY_BUCKET",
      "bucket_name": "nuxt-demo-bucket"
    }
  ]
}
```
- `binding`：程式碼中使用的變數名稱
- `bucket_name`：Cloudflare 上實際的 bucket 名稱
- 可選 `"remote": true`：本地開發直連雲端 R2（預設 false 用本地模擬）

### 在 Server Route 中取得 Bucket
```typescript
const bucket = event.context.cloudflare.env.MY_BUCKET;
```
> 專案中已封裝為共用工具：`app/utils/useBucket.ts`

---

## 3. R2 API 速查表

| 操作 | 方法 | 說明 |
|------|------|------|
| 上傳 | `bucket.put(key, value, options?)` | value 可以是 `string` / `ArrayBuffer` / `ReadableStream` / `Blob` / `File` |
| 下載 | `bucket.get(key)` | 回傳 `R2ObjectBody | null`，用 `.body` 取 ReadableStream |
| 刪除 | `bucket.delete(key)` | 可傳單一 key 或 key 陣列 |
| 列表 | `bucket.list(options?)` | `prefix` / `limit` / `cursor` 可選 |
| 檢查 | `bucket.head(key)` | 只取 metadata，不下載內容（比 get 輕） |

---

## 4. 專案中的實作範例

| 功能 | 檔案位置 |
|------|----------|
| 上傳 API | `server/api/bucket/upload.post.ts` |
| 列表 API | `server/api/bucket/index.get.ts` |
| 檔名清洗工具 | `app/utils/fileNameCleaning.ts` |
| Bucket 共用工具 | `app/utils/useBucket.ts` |
| 前端 API 封裝 | `app/composables/useBucketApi.ts` |
| 前端上傳頁面 | `app/pages/backstage/upload.vue` |

### 關鍵流程摘要

**上傳流程**：前端 FormData → `readFormData(event)` → 檔名清洗 → `bucket.put(key, file, { httpMetadata })` → 回傳 key

**列表流程**：`bucket.list({ limit: 100 })` → `listed.objects.map(...)` → 回傳陣列

**下載流程**（尚未建立）：需要 `server/api/bucket/download/[...key].get.ts` 當中間人，用 `bucket.get(key)` 取檔後回傳 `new Response(object.body, { headers })`

---

## 5. 檔案讀取與前端呈現

### 方式 1：透過 Worker API 代理（目前使用）
```vue
<img :src="`/api/bucket/download/${item.r2_key}`" />
```

### 方式 2：R2 Custom Domain + CDN（進階，更快）
```vue
<img :src="`https://assets.example.com/${item.r2_key}`" />
```

> 免費方案先用方式 1，流量大了再考慮方式 2。
> 每張 `<img>` 瀏覽器自動平行發 HTTP 請求（同時 6 條），10 張圖 10 次請求是正常行為。

---

## 6. 注意事項與踩坑紀錄

| 項目 | 規則 |
|------|------|
| **同名覆蓋** | `bucket.put()` 同名 key 直接覆蓋不報錯，Key 必須加 Timestamp 保證唯一 |
| **正斜線** | R2 路徑與網址只認 `/`，禁用 `\` |
| **≤ 5MB** | 用 Worker Binding 中轉（本文模式） |
| **> 5MB** | 改用 Presigned URL，前端直接 PUT 到 R2，不經 Worker |
| **list prefix 陷阱** | `prefix` 必須與上傳時的 key 前綴**完全一致**。上傳 key 無前綴時，list 不能用 `prefix: '/'`，要留空或不傳 |
| **下載需要 Server Route** | R2 binding 不是公開 URL，瀏覽器無法直接存取。需建 Server Route 當中間人 |
| **npm run dev 無法用** | 跟 D1 一樣，Node.js 環境無法存取 R2 binding，必須用 `cf:preview` 測試 |
| **檔名安全** | 使用者上傳的檔名可能含惡意路徑，務必清洗（參考 `app/utils/fileNameCleaning.ts`） |
