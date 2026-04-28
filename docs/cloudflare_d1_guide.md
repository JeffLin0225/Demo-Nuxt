# Cloudflare D1 資料庫整合指南 (Nuxt 4)

這份文件記錄了在 Nuxt 專案中整合 Cloudflare D1 (SQLite) 的核心觀念、指令與常見雷區。

---

## 1. 核心環境觀念 (Local vs Remote)

| 環境 | 資料位置 | 使用時機 |
|------|----------|----------|
| 本地 (`--local`) | `.wrangler/state/v3/d1`（真實 SQLite 檔案） | 日常開發 |
| 遠端 (`--remote`) | Cloudflare 雲端機房 | 正式上線 / 驗證正式資料 |

> ⚠️ `.wrangler/` 必須加入 `.gitignore` 以免外洩。

---

## 2. 建立資料庫與遷移 (Migrations)

### CLI 操作
```bash
# 建立雲端資料庫（記下 database_id 貼入 wrangler.json）
wrangler d1 create demo-db

# 套用 migration 到本地
wrangler d1 migrations apply demo-db --local

# 套用 migration 到雲端
wrangler d1 migrations apply demo-db --remote
```

### ⚠️ Migration 雷區
Wrangler 根據**檔案名稱**追蹤進度。已執行過的 `0001_xxx.sql` 修改後重新 `apply`，會被直接略過！
若要修改結構，必須建立新的 `0002_rename_columns.sql`，寫 `ALTER TABLE ...`。

### 🔄 重置 Migration（砍掉重練）
光砍 Table 不夠，還必須清除 Wrangler 追蹤紀錄：

**遠端重置：**
```bash
npx wrangler d1 execute demo-db --remote --command "DROP TABLE IF EXISTS users"
npx wrangler d1 execute demo-db --remote --command "DELETE FROM d1_migrations WHERE name = '0001_create_users_table.sql'"
npx wrangler d1 migrations apply demo-db --remote
```

**本地重置（直接砍檔案更快）：**
```bash
rm -rf .wrangler/state
npx wrangler d1 migrations apply demo-db --local
```

**驗證：**
```bash
npx wrangler d1 execute demo-db --remote --command "PRAGMA table_info(users)"
```

> ⚠️ 此操作會**永久刪除所有資料**，僅適用於開發階段。

---

## 3. 環境綁定 (Bindings)

### wrangler.json
```json
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "demo-db",
      "database_id": "你的-db-id"
    }
  ]
}
```

### 在 Server Route 中取得 DB
```typescript
const db = event.context.cloudflare.env.DB;
```
> 專案中已封裝為共用工具：`app/utils/useDB.ts`

---

## 4. D1 API 速查表

| 方法 | 用途 |
|------|------|
| `.prepare(SQL)` | 準備 SQL 語法 |
| `.bind(var1, var2)` | 綁定變數（防止 SQL 注入攻擊） |
| `.all()` | 取得所有結果陣列 (SELECT) |
| `.first()` | 僅取得第一筆 |
| `.run()` | 執行不回傳內容，僅回傳狀態 (INSERT/UPDATE/DELETE) |

> 專案中的完整 CRUD 範例：`server/api/db/users.get.ts`、`server/api/db/users.post.ts`

---

## 5. 開發與測試流程

**極度重要：`npm run dev` (Node.js) 無法存取 Cloudflare bindings！**

```bash
# 1. 打包專案
npm run build:cf

# 2. 啟動 Cloudflare 本地預覽
npm run cf:preview

# 3. 測試端口
# http://localhost:8788
```

---

## 6. 本機存取遠端 D1（兩種方式）

### 方式 1：CLI 直接下 SQL
```bash
npx wrangler d1 execute demo-db --remote --command "SELECT * FROM users"
npx wrangler d1 export demo-db --remote --output=backup.sql
```

### 方式 2：cf:preview 直連遠端
在 `wrangler.json` 加上 `"remote": true`，跑 `cf:preview` 就會直連雲端 DB。

> ⚠️ `remote: true` 直接操作正式資料！開發時建議保持 `false`。

---

## 7. 錯誤處理與除錯

### createError 用 `message` 不用 `statusMessage`
```typescript
// ✅ 正確
throw createError({ statusCode: 500, message: '操作失敗' });
// ⚠️ 舊寫法（會收到 WARNING）
throw createError({ statusCode: 500, statusMessage: '操作失敗' });
```

### Server 端 console.log 在哪看？
| 程式碼位置 | 看 log 的地方 |
|-----------|--------------|
| `app/pages/` | 瀏覽器 F12 Console |
| `server/api/` | 終端機 / `cf:preview` 輸出視窗 |
| 部署後 | `npx wrangler tail`（即時串流，免費） |

> 最佳實踐：`catch` 用 `console.error()` 記完整錯誤，`createError()` 只回模糊訊息給使用者。
