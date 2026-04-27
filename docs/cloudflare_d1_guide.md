# Cloudflare D1 資料庫整合完全指南 (Nuxt 4)

這份文件記錄了在 Nuxt 專案中整合 Cloudflare D1 (SQLite) 的核心觀念、指令與常見雷區，作為未來開發的備忘錄。

---

## 1. 核心環境觀念 (Local vs Remote)

Cloudflare D1 嚴格區分「本地開發」與「遠端正式機」的環境，確保正式資料的安全與開發效能。

*   **本地端 (`--local`)**：
    *   資料實體儲存在專案目錄的隱藏資料夾 `.wrangler/state/v3/d1` 內。
    *   這是一個真實的 SQLite 檔案，開發時速度飛快。
    *   **⚠️ 必須加入 `.gitignore` 以免外洩。**
*   **遠端 (`--remote`)**：
    *   資料實體在 Cloudflare 雲端機房。
    *   只有在執行正式上線指令時才會與其互動。

---

## 2. 建立資料庫與遷移 (Migrations)

### 建立雲端資料庫
一開始，必須先在 Cloudflare 帳號中真正開通一顆資料庫：
*   **建立指令**：`wrangler d1 create demo-db`
*(執行後，終端機會印出 `database_name` 與 `database_id`，必須將它們貼入 `wrangler.json` 中)*

### 遷移指令 (套用 SQL 結構)
我們透過 `.sql` 檔案來建立與修改資料表結構。Wrangler 會自動偵測專案下的 `migrations/` 資料夾。
*   **套用到本地**：`wrangler d1 migrations apply demo-db --local`
*   **套用到雲端**：`wrangler d1 migrations apply demo-db --remote`

### ⚠️ Migration 雷區 (修改欄位怎麼辦？)
Wrangler 是根據「檔案名稱」來追蹤進度。如果**遠端資料庫已經執行過這份 `0001_create_table.sql`**，Wrangler 內部就會標記此檔案已完成。
這時如果你回頭修改 `0001` 檔案裡面的欄位並重新 `apply`，Wrangler 會直接略過它！
因此，若要修改結構，請務必建立新的 `0002_rename_columns.sql`，寫入 `ALTER TABLE ...` 等語法後，再次執行 `apply` 指令。

---

## 3. 環境綁定 (Bindings)

讓 Nuxt 認識資料庫的關鍵橋樑。

1.  在 `wrangler.json` 定義遙控器：
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
2.  在 Nuxt API 取出遙控器：
    ```typescript
    const db = event.context.cloudflare.env.DB;
    ```

---

## 4. Nuxt API 開發與 SQL 語法

Cloudflare D1 API 採用防呆設計，必須手動觸發執行動作：

*   `.prepare(SQL)`：準備語法
*   `.bind(var1, var2)`：綁定變數（**防止 SQL 注入攻擊**）
*   **執行指令 (必填)**：
    *   `.all()`：取得所有符合條件的資料陣列 (GET)
    *   `.first()`：僅取得第一筆資料
    *   `.run()`：執行不回傳資料庫內容，僅回傳執行狀態 (POST / PUT / DELETE)

### 讀取範例 (GET)
```typescript
export default defineEventHandler(async (event) => {
  const db = event.context.cloudflare.env.DB;
  try {
    const { results } = await db.prepare('SELECT * FROM users ORDER BY id DESC').all();
    return { success: true, data: results };
  } catch(err: any) {
    return { success: false, message: err.message };
  }
});
```

### 寫入範例 (POST)
```typescript
export default defineEventHandler(async (event) => {
  const db = event.context.cloudflare.env.DB;
  const body = await readBody(event);
  
  try {
    const result = await db.prepare('INSERT INTO users (user_name, user_email) VALUES (?, ?)')
      .bind(body.user_name, body.user_email)
      .run();
    return { success: true, result };
  } catch(err: any) {
    throw createError({ statusCode: 500, statusMessage: err.message });
  }
});
```

---

## 5. 開發與測試流程 (預覽模式)

**極度重要：Node.js 環境 (`npm run dev`) 無法直接讀取 Cloudflare bindings！**
若要測試帶有資料庫連線的 API，請一律使用原生的 Cloudflare 環境預覽：

1.  **打包專案**：`npm run build:cf` (將產物輸出至 `dist` 資料夾)
2.  **啟動預覽**：`npm run cf:preview`
3.  **測試端口**：一律使用 `http://localhost:8788` 進行 API 測試與網頁瀏覽。
