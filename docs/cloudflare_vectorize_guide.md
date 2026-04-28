# Cloudflare Vectorize 向量資料庫開發指南 (Workers / Nuxt 3)

## 1. Vectorize 是什麼

Cloudflare 的全球分散式向量資料庫，專門儲存 ML 模型產出的 vector embeddings，用於語意搜尋、推薦、分類、異常偵測、RAG (Retrieval-Augmented Generation)。

**不存原始資料**，只存向量表示。查出相似向量後，用 ID 去 D1/R2/KV 取回原始內容。

## 2. 核心概念

| 概念 | 說明 |
|------|------|
| **Index** | 向量資料庫實體，建立時指定 `dimensions` + `metric`，**建後不可改** |
| **Vector** | `id`(string) + `values`(float32[]) + 可選 `metadata`(≤10KiB) + 可選 `namespace`(分區) |
| **Distance Metric** | `cosine`(越近1越相似)、`euclidean`(越近0越相似)、`dot-product` |
| **Metadata Index** | 對 metadata 欄位建索引(≤10個)，支援 `string`/`number`/`boolean`，可在 query 中過濾 |

## 3. 環境綁定 (`wrangler.json`)

```json
{
  "vectorize": [
    {
      "binding": "VECTORIZE",
      "index_name": "my-index",
      "remote": true
    }
  ],
  "ai": {
    "binding": "AI",
    "remote": true
  }
}
```

- Worker 中透過 `env.VECTORIZE` / `env.AI` 存取
- Nuxt 3 透過 `event.context.cloudflare.env.VECTORIZE` 存取
- **Vectorize 和 Workers AI 沒有本地模擬，`remote: true` 為必須**

## 4. 本地開發模式：各服務 `remote` 支援總覽

| 服務 | 本地模擬 | `remote: true` |
|------|----------|----------------|
| D1 | 有 (SQLite) | 可選 |
| R2 | 有 (本地檔案) | 可選 |
| KV | 有 | 可選 |
| **Vectorize** | **無** | **必須** |
| **Workers AI** | **無** | **必須** |

混搭範例：

```json
{
  "d1_databases": [{ "binding": "DB", "database_name": "...", "database_id": "...", "remote": false }],
  "r2_buckets": [{ "binding": "MY_BUCKET", "bucket_name": "...", "remote": false }],
  "vectorize": [{ "binding": "VECTORIZE", "index_name": "...", "remote": true }],
  "ai": { "binding": "AI", "remote": true }
}
```

> `remote: true` 會影響真實資料並產生計費，建議用 staging 資源。

## 5. CLI 建立 Index

```bash
# 建立 index（以 Workers AI bge-base-en-v1.5 的 768 維為例）
npx wrangler vectorize create my-index --dimensions=768 --metric=cosine

# 建立 metadata index（可選，用於過濾）
npx wrangler vectorize create-metadata-index my-index --property-name=category --type=string

# 查看 index 資訊
npx wrangler vectorize info my-index

# 列出 metadata indexes
npx wrangler vectorize list-metadata-index my-index
```

## 6. API 操作

```ts
// --- 插入（同 ID 忽略，不覆蓋）---
const inserted = await env.VECTORIZE.insert([
  { id: "1", values: [0.12, 0.45, ...], metadata: { url: "/doc/1" } },
  { id: "2", values: [0.34, 0.78, ...], metadata: { url: "/doc/2" } },
]);

// --- Upsert（同 ID 完整取代，不合併）---
const upserted = await env.VECTORIZE.upsert(vectors);

// --- 查詢相似向量 ---
const matches = await env.VECTORIZE.query(queryVector, {
  topK: 5,              // 最多回傳筆數（含 values/metadata 時上限 50，不含時 100）
  returnValues: true,    // 是否回傳向量值
  returnMetadata: "all", // "none" | "indexed" | "all"
});
// matches.matches = [{ id, score, values?, metadata? }, ...]

// --- 用已存在的向量 ID 查詢 ---
const matches = await env.VECTORIZE.queryById("some-id", { topK: 5 });

// --- 依 ID 取回向量 ---
const vectors = await env.VECTORIZE.getByIds(["1", "2"]);

// --- 刪除 ---
const deleted = await env.VECTORIZE.deleteByIds(["1", "2"]);

// --- 查看 index 設定 ---
const details = await env.VECTORIZE.describe();
```

> 所有寫入操作（insert/upsert/delete）都是**非同步**的，回傳 `mutationId`，通常幾秒後生效。

## 7. 搭配 Workers AI 的 RAG 完整範例

```ts
export interface Env {
  VECTORIZE: Vectorize;
  AI: Ai;
  DB: D1Database;
}

interface EmbeddingResponse {
  shape: number[];
  data: number[][];
}

export default defineEventHandler(async (event) => {
  const { VECTORIZE, AI, DB } = event.context.cloudflare.env;
  const url = new URL(event.node.req.url!);

  // === 寫入流程：文字 → embedding → Vectorize + D1 ===
  if (url.pathname === "/insert") {
    const docs = [
      { id: "1", text: "Nuxt 3 是基於 Vue 3 的全端框架" },
      { id: "2", text: "Cloudflare Workers 運行在邊緣" },
    ];

    // 1. 用 Workers AI 生成 embeddings
    const resp: EmbeddingResponse = await AI.run("@cf/baai/bge-base-en-v1.5", {
      text: docs.map((d) => d.text),
    });

    // 2. 組成 Vectorize 格式並 upsert
    const vectors = resp.data.map((values, i) => ({
      id: docs[i].id,
      values,
      metadata: { text: docs[i].text },
    }));
    const result = await VECTORIZE.upsert(vectors);

    // 3. 原始文字存 D1
    for (const doc of docs) {
      await DB.prepare("INSERT OR REPLACE INTO documents (id, content) VALUES (?, ?)")
        .bind(doc.id, doc.text)
        .run();
    }

    return { success: true, mutationId: result.mutationId };
  }

  // === 查詢流程：query → embedding → Vectorize → D1 取原文 ===
  const query = url.searchParams.get("q") || "什麼是邊緣運算";

  // 1. query 轉 embedding
  const queryEmb: EmbeddingResponse = await AI.run("@cf/baai/bge-base-en-v1.5", {
    text: [query],
  });

  // 2. 向量搜尋
  const matches = await VECTORIZE.query(queryEmb.data[0], {
    topK: 3,
    returnMetadata: "all",
  });

  // 3. 用 ID 去 D1 取完整內容（可選，如果 metadata 已存夠多資訊可跳過）
  const ids = matches.matches.map((m) => m.id);
  const placeholders = ids.map(() => "?").join(",");
  const { results } = await DB.prepare(
    `SELECT * FROM documents WHERE id IN (${placeholders})`
  )
    .bind(...ids)
    .all();

  return { query, matches: matches.matches, documents: results };
});
```

## 8. 常用 Embedding 模型維度對照

| 模型 | 維度 | 類型 |
|------|------|------|
| `@cf/baai/bge-base-en-v1.5` (Workers AI) | 768 | 文字 |
| `@cf/baai/bge-small-en-v1.5` (Workers AI) | 384 | 文字 |
| OpenAI `text-embedding-ada-002` | 1536 | 文字 |
| Cohere `embed-multilingual-v2.0` | 768 | 文字 |
| Google `multimodalembedding` | 1408 | 多模態 |

> 建 index 時的 `dimensions` 必須與模型輸出維度完全一致。

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

## 10. 定價

| 項目 | 免費額度 | 超出費用 |
|------|----------|----------|
| 查詢維度 | 50M / 月 | $0.01 / 百萬 |
| 儲存維度 | 10M | $0.05 / 億 |

範例：10,000 個 768 維向量、每月查 30,000 次 → **~$0.31/月**

不收：egress、空 index、CPU/記憶體、index 數量。

## 11. 注意事項

- **維度與 metric 建後不可變**，選錯只能刪掉重建
- `insert` 同 ID 跳過；`upsert` 同 ID 完整取代（不做 merge）
- 寫入都是非同步，幾秒後才可查
- embedding 模型輸出維度 **必須對上** index 的 dimensions
- `string` Metadata Index 只索引前 **64 bytes**
- Vectorize 路徑架構：`Workers AI → Vectorize → D1/R2 取原始資料`
