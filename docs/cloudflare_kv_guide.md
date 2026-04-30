# Cloudflare KV (Key-Value) 開發指南 (Nuxt 4)

這份文件記錄了在 Nuxt 專案中整合 Cloudflare KV 儲存的核心觀念、CLI 操作與常見雷區。

---

## 1. KV 是什麼？

Cloudflare KV 是一個**全球分散式的鍵值對（Key-Value）資料庫**。
你可以把它想像成一個超級巨大的 JavaScript Object `{}`，存在 Cloudflare 的邊緣節點上。

**特性：**
- **極度快速的讀取**：因為資料會自動複製到全球節點，使用者讀取時是從離他最近的機房拿資料（延遲通常 < 10ms）。
- **最終一致性 (Eventual Consistency)**：寫入資料後，全球節點同步需要時間（最多可能要 60 秒才會全網更新）。
- **只存字串**：Value 只能存 String、ArrayBuffer 或 ReadableStream。如果要存 JSON（例如陣列或物件），必須先 `JSON.stringify()`。

**最常見的用途：**
1. **Cache (快取)**：把算很久的資料（如 AI 搜尋結果、複雜的 D1 報表）存起來。
2. **設定檔**：全站共用的設定值。

| 免費額度 | 值 |
|----------|------|
| 儲存空間 | 1 GB |
| 讀取次數 | 100,000 次 / 天 |
| 寫入次數 | 1,000 次 / 天 |

---

## 2. 核心觀念：KV 絕對不能做的事

| 功能 | D1 (關聯資料庫) | KV (鍵值快取) |
|------|-----------------|---------------|
| **`LIKE` 模糊搜尋** | ✅ 支援 (`LIKE '%字%'`) | ❌ 不支援，只能精確比對 Key |
| **條件過濾 (WHERE)** | ✅ 支援 | ❌ 不支援 |
| **排序 (ORDER BY)** | ✅ 支援 | ❌ 不支援 |
| **即時寫入即時讀取** | ✅ 寫入後馬上查得到 | ❌ 寫入後可能要等幾秒其他節點才看得到 |

> ⚠️ **KV 不能取代 D1！** KV 沒有辦法搜尋內容。你要拿出資料，**必須知道精確的 Key**。

---

## 3. 環境設定

### CLI 操作

```bash
# 建立一個 KV Namespace (空間)
npx wrangler kv:namespace create AI_CACHE

# 預期輸出會給你一段綁定設定，例如：
# { binding = "AI_CACHE", id = "xxxxx-xxxx-xxxx" }

# 列出目前所有的 KV namespaces
npx wrangler kv:namespace list
```

### wrangler.json 綁定

把 CLI 產生的 `id` 貼進 `wrangler.json`：

```json
{
  "kv_namespaces": [
    {
      "binding": "AI_CACHE",
      "id": "<你的_KV_ID>"
    }
  ]
}
```

> **注意：KV 沒有本地模擬器！** 在開發環境若要測試，通常會需要設定一個預覽用的 KV 空間（`preview_id`），或是直接用線上資源。不過 Nuxt Nitro 有內建開發用記憶體 KV 模擬。

### 在 Server Route 中取得服務

```typescript
const kv = event.context.cloudflare.env.AI_CACHE;
```

---

## 4. API 操作速查表

| 操作 | 語法 | 說明 |
|------|------|------|
| **寫入資料** | `await kv.put("key", "value")` | 寫入字串 |
| **寫入(含過期時間)** | `await kv.put("key", "value", { expirationTtl: 86400 })` | 設定 86400 秒 (1天) 後自動刪除。非常適合做 Cache！ |
| **讀取字串** | `await kv.get("key")` | 回傳 String，找不到回傳 null |
| **讀取並轉 JSON** | `await kv.get("key", "json")` | 自動幫你 `JSON.parse` |
| **刪除資料** | `await kv.delete("key")` | 刪除單筆資料 |
| **列出 Keys** | `await kv.list({ prefix: "search:" })` | 列出開頭是 `search:` 的所有 Keys |

---

## 5. 專案實作模式：Cache-Aside (旁路快取)

這是業界最常用的 KV 快取模式：

```typescript
// 1. 產生一個精確的 Cache Key
const cacheKey = `search_ai:${query}`;

// 2. 先去 KV 查看看有沒有算過的答案
const cachedData = await kv.get(cacheKey, "json");

// 3. 如果 KV 有，直接回傳 (0.01 秒！)
if (cachedData) {
    return cachedData; 
}

// 4. 如果 KV 沒有，乖乖花時間算 (例如呼叫 AI 轉向量 -> 2 秒)
const slowResult = await heavyTask(query);

// 5. 算完後，存一份到 KV 裡，設定 1 天後過期
await kv.put(cacheKey, JSON.stringify(slowResult), { expirationTtl: 86400 });

// 6. 回傳結果
return slowResult;
```
