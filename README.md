# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

## 📜 專案可用指令說明 (Scripts)

本專案已經設定了 Cloudflare 的部署環境，以下是常用的 `npm run` 指令備忘錄：

### 👨‍💻 日常開發
* **`npm run dev`**：啟動標準本地開發伺服器（無 Cloudflare 綁定）。
* **`npm run dev:cf`**：啟動 Wrangler 代理模式的開發伺服器。支援熱更新 (HMR)，同時也能讀取 D1/R2 等 Cloudflare 綁定。

### 📦 打包 (Build)
* **`npm run build`**：將 Nuxt 打包。由於設定了 `cloudflare_pages` preset，打包產物會自動轉換為 Cloudflare 格式並放在 `.output/public` 資料夾。
* **`npm run generate`**：全靜態打包 (SSG)。（僅產出靜態 HTML/JS，不會啟動 Server API）。

### ☁️ Cloudflare 部署專用指令
*(執行以下指令前，請確保已經先執行過 `npm run build`)*
* **`npm run cf:preview`**：使用 Wrangler 在本地端模擬 Cloudflare 環境跑起你的專案，用來上線前做最後測試。
* **`npm run cf:deploy`**：一鍵將打包好的網站上傳到 Cloudflare Pages 正式上線！
