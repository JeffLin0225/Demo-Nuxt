# Nuxt Fullstack Demo (Learning Project)

一個「可學習、可實作」的 Nuxt 全端範例專案：  
`Nuxt 4 + TailwindCSS + Nitro API + Cloudflare (D1/R2/Vectorize/AI)`

---

## 一秒看懂這個專案

- 前端頁面：`app/pages/*`
- 後端 API：`server/api/*`
- 資料庫與雲端資源：透過 `wrangler.json` bindings
- 目標：用 Nuxt 完整走一次「頁面 + API + 雲端資源」實戰流程

---

## 3 步快速開始（無腦版）

1. 安裝依賴
```bash
npm install
```

2. 啟動開發環境
```bash
npm run dev
```

3. 開瀏覽器
- [http://localhost:3000](http://localhost:3000)

---

## 專案架構圖

```text
nuxt-demo/
├─ app/
│  ├─ pages/          # 前端頁面（首頁、posts、backstage...）
│  ├─ layouts/        # 版面配置
│  ├─ components/     # 共用元件
│  ├─ composables/    # 前端邏輯封裝
│  └─ assets/css/     # Tailwind 入口與全域樣式
├─ server/
│  └─ api/            # Nitro API（db/bucket/vectors/...）
├─ migrations/        # D1 SQL migration
├─ docs/              # 學習文件與操作指南
├─ nuxt.config.ts     # 混合渲染 + runtime config
└─ wrangler.json      # Cloudflare bindings（目前為範例值）
```

---

## 主要路由與渲染策略

目前 `nuxt.config.ts` 設定：

- `/` -> `prerender: true`（SSG）
- `/posts/**` -> `swr: 3600`（SWR）
- `/backstage/**` -> `ssr: false`（CSR）
- `/api/**` -> `cors: true`

---

## 常用指令

- `npm run dev`：本地 Nuxt 開發
- `npm run build`：一般 build
- `npm run preview`：預覽 build 結果
- `npm run build:cf`：Cloudflare Pages preset build
- `npm run cf:preview`：Wrangler 本地模擬（需正確 bindings）
- `npm run cf:deploy`：部署到 Cloudflare Pages

---

## docs 閱讀順序（推薦）

1. `docs/nuxt_fullstack_learning_plan.md`  
   - 你目前學習主線與階段進度
2. `docs/tailwindcss_guide.md`  
   - Tailwind 實作重點（含 Preflight reset 說明）
3. `docs/cloudflare_d1_guide.md`
4. `docs/cloudflare_r2_guide.md`
5. `docs/cloudflare_vectorize_guide.md`

---

## Cloudflare 使用注意（重要）

- `wrangler.json` 目前是**範例值**（可公開）
- 若要連真實資源，請自行填入你的：
  - `database_name` / `database_id`
  - `bucket_name`
  - `index_name`
- 請勿把真實 token / secret 提交到 git

---

## 這個 repo 適合誰

- 想從 Vue/Nuxt 前端進入全端開發的人
- 想學 Nuxt + Nitro + Cloudflare 基礎整合的人
- 想把學習步驟文件化、可重複練習的人
