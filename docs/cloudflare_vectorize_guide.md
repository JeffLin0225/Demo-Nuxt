# Cloudflare Vectorize 向量資料庫整合指南 (Nuxt 4)

這份文件記錄了在 Nuxt 專案中整合 Cloudflare Vectorize 向量資料庫的核心觀念、CLI 操作與常見雷區。

---

## 1. Vectorize 是什麼

Cloudflare 的全球分散式向量資料庫，專門儲存 Embedding 模型產出的向量（一串數字），用於語意搜尋、推薦、RAG。

**不存原始資料**，只存向量。查出相似向量後，用 ID 去 D1 取回原始內容。

### 架構原則：三劍客分工

| 角色 | 職責 |
|------|------|
| **Workers AI** | 翻譯官：把文字轉成向量（Embedding） |
| **Vectorize** | 向量倉庫：存向量 + 做相似度搜尋 |
| **D1** | 文字倉庫：存原始內容（長文、結構化資料） |

> Vectorize 自己**不會把文字轉成向量**！這也是 `wrangler.json` 中需要同時綁定 `vectorize` 和 `ai` 的原因。

| 免費額度 | 值 |
|----------|------|
| 查詢維度 | 5,000 萬/月 |
| 儲存維度 | 1,000 萬 |
| Workers AI | 每天 10,000 Neurons |

---

## 2. 核心概念

| 概念 | 說明 |
|------|------|
| **Index** | 向量資料庫實體，建立時指定 `dimensions` + `metric`，**建後不可改** |
| **Vector** | `id`(string) + `values`(float32[]) + 可選 `metadata`(≤10KiB) + 可選 `namespace`(分區) |
| **Distance Metric** | `cosine`(越近1越相似)、`euclidean`(越近0越相似)、`dot-product` |
| **Metadata** | 附加短標籤，**只能用來過濾（像 SQL WHERE），不參與相似度比對** |

### 與 ChromaDB 的差異

| 特性 | Cloudflare Vectorize | ChromaDB |
|------|---------------------|----------|
| 內建 Embedding | ❌ 需搭配 Workers AI 自己轉 | ✅ 自動幫你轉 |
| 存原始文字 | ❌ 只存向量，原文要存 D1 | ✅ 可以存 |
| 部署 | 邊緣網路（免架伺服器） | 自架伺服器 |
| 費用 | 免費額度大 | 自己出機器費用 |

---

## 3. 環境設定

### CLI 操作

```bash
# 建立 index（維度必須與 Embedding 模型輸出一致）
npx wrangler vectorize create demo-docs-index --dimensions=1024 --metric=cosine

# 查看 index 資訊（確認 vectorCount 和 dimensions）
npx wrangler vectorize info demo-docs-index

# 用 ID 查詢特定向量是否存在
npx wrangler vectorize get-vectors demo-docs-index --ids="doc-123456"

# 刪除 index（維度/metric 選錯時只能刪掉重建）
npx wrangler vectorize delete demo-docs-index
```

### wrangler.json 綁定

```json
{
  "vectorize": [
    {
      "binding": "VECTORIZE",
      "index_name": "demo-docs-index",
      "remote": true
    }
  ],
  "ai": {
    "binding": "AI",
    "remote": true
  }
}
```

- `vectorize` 是陣列，`ai` 是單一物件（格式不同）
- **兩者都必須 `remote: true`**，沒有本地模擬器
- Workers AI **不需要用 CLI 建立**，帳號自動有，綁定就能用

### 各服務 `remote` 總覽

| 服務 | 本地模擬 | `remote: true` | 需要 CLI 建立？ |
|------|----------|----------------|-----------------|
| D1 | 有 (SQLite) | 可選 | ✅ `wrangler d1 create` |
| R2 | 有 (本地檔案) | 可選 | ✅ `wrangler r2 bucket create` |
| **Vectorize** | **無** | **必須** | ✅ `wrangler vectorize create` |
| **Workers AI** | **無** | **必須** | ❌ 不用（全域共用服務） |

### 在 Server Route 中取得服務

```typescript
const vectorize = event.context.cloudflare.env.VECTORIZE;
const ai = event.context.cloudflare.env.AI;
```

> 專案中已封裝為共用工具：`app/utils/useVectorize.ts`、`app/utils/useAi.ts`

---

## 4. Vectorize API 速查表

| 操作 | 方法 | 說明 |
|------|------|------|
| 插入 | `VECTORIZE.insert([...])` | 同 ID 跳過，不覆蓋 |
| 新增/覆蓋 | `VECTORIZE.upsert([...])` | 同 ID 完整取代（不做 merge）|
| 查詢相似 | `VECTORIZE.query(vector, options)` | topK、filter、returnMetadata |
| 用 ID 查詢 | `VECTORIZE.queryById(id, options)` | 用已存在的向量做搜尋 |
| 取回向量 | `VECTORIZE.getByIds([...])` | 依 ID 取回 |
| 刪除 | `VECTORIZE.deleteByIds([...])` | 依 ID 刪除 |
| 查看設定 | `VECTORIZE.describe()` | index 資訊 |

> ⚠️ 所有寫入操作（insert/upsert/delete）都是**非同步**的，回傳 `mutationId`，通常幾秒後生效。
> ⚠️ `upsert` 的參數是**陣列**，即使只有一筆也要用 `[{...}]` 包起來。

---

## 5. Embedding 模型選擇

**維度由模型決定，不是你自己選的。** 選好模型 → 看它輸出幾維 → 建 index 時填對應維度。

| 模型 | 維度 | 語言 | 說明 |
|------|------|------|------|
| **`@cf/baai/bge-m3`** ⭐ | **1024** | **多語言（中英日韓 100+）** | **推薦！最通用** |
| `@cf/baai/bge-base-en-v1.5` | 768 | 英文為主 | 英文場景用 |
| `@cf/baai/bge-small-en-v1.5` | 384 | 英文為主 | 輕量版 |
| `@cf/qwen/qwen3-embedding-0.6b` | — | 多語言 | 支援 4096 tokens 長文 |

> ⚠️ `@cf/baai/bge-large-zh-v1.5` 在 Workers AI 上**不存在**！中文請用 `bge-m3`。

---

## 6. 專案中的實作範例

| 功能 | 檔案位置 |
|------|----------|
| 插入 API（文字→embedding→Vectorize+D1） | `server/api/vectors/insert.post.ts` |
| Vectorize 共用工具 | `app/utils/useVectorize.ts` |
| Workers AI 共用工具 | `app/utils/useAi.ts` |
| D1 documents 表 | `migrations/0002_create_documents_table.sql` |

### 關鍵流程摘要

**插入流程**：前端傳文字 → `ai.run("@cf/baai/bge-m3", { text: [...] })` 轉向量 → `vectorize.upsert([{ id, values, metadata }])` 存向量 → `db.prepare("INSERT ...").run()` 存原文

**搜尋流程**（待完成）：搜尋詞 → AI 轉向量 → `vectorize.query(vector, { topK, filter })` 找相似 → 用 ID 去 D1 撈原文

---

## 7. metadata 與搜尋的關係

**metadata 不參與向量相似度比對，它只是過濾器。**

- `values`（向量）→ 負責「找相似的」
- `metadata` → 負責「先篩掉不要的」（像 SQL 的 WHERE）

### metadata vs D1 的選擇

| 場景 | 用 metadata | 用 D1 |
|------|------------|-------|
| 短標籤（category/language） | ✅ | — |
| 長文原文 | ❌（限 10 KiB） | ✅ |
| 列表/分頁/排序 | ❌ | ✅ |
| SQL 複雜查詢 | ❌ | ✅ |
| 寫入即時可見 | ❌（非同步） | ✅ |

---

## 8. 測試驗證方法

### 插入測試

```bash
# 需先 npm run build:cf && npm run cf:preview
curl -X POST http://localhost:8788/api/vectors/insert \
  -H "Content-Type: application/json" \
  -d '{"content": "Nuxt 是基於 Vue 的全端框架", "category": "frontend"}'

# 預期回傳
# {"success":true,"id":"doc-17774...","mutationId":"xxx","dimensions":1024}
```

### 驗證向量已存入

```bash
# 確認 vectorCount 增加（剛寫入要等幾秒）
npx wrangler vectorize info demo-docs-index

# 確認 D1 也有對應資料
npx wrangler d1 execute demo-db --remote --command "SELECT * FROM documents"
```

---

## 9. 限制

| 項目 | 值 |
|------|-----|
| Indexes / 帳戶 | 50,000 (Paid) / 100 (Free) |
| 每 Index 最大向量數 | 10,000,000 |
| 最大維度 | 1536 |
| Metadata / 向量 | 10 KiB |
| topK（含 values/metadata） | 50 |
| topK（不含） | 100 |
| Upsert 批次上限 | 1,000 (Workers) / 5,000 (HTTP API) |
| Metadata Indexes / Index | 10 |
| Vector ID 長度 | 64 bytes |

---

## 10. 注意事項與踩坑紀錄

| 項目 | 規則 |
|------|------|
| **維度/metric 不可改** | 建 index 時選錯，只能刪掉重建 |
| **insert vs upsert** | `insert` 同 ID 跳過；`upsert` 同 ID 完整取代（不做 merge） |
| **非同步寫入** | insert/upsert/delete 回傳 `mutationId` 後要等幾秒才可搜到 |
| **維度必須對齊** | embedding 模型輸出維度必須與 index 的 dimensions 完全一致 |
| **upsert 要陣列** | `vectorize.upsert([{...}])`，少了 `[]` 會報錯 |
| **模型不存在** | `bge-large-zh-v1.5` 在 Workers AI 不存在，中文用 `bge-m3` |
| **npm run dev 無法用** | 跟 D1/R2 一樣，Node.js 環境無法存取 Vectorize/AI binding，必須用 `cf:preview` |
| **metadata 不是搜尋** | metadata 只能過濾（filter），不參與向量相似度比對 |
| **string metadata 截斷** | Metadata Index 的 string 類型只索引前 64 bytes |
