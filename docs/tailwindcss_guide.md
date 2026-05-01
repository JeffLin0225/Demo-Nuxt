# Nuxt 4 x TailwindCSS 開發指南

這份文件介紹了如何在 Nuxt 專案中整合 TailwindCSS，以及如何利用它快速建構高品質的 UI。

---

## 1. 為什麼在 Nuxt 中使用 TailwindCSS？

- **無須命名**：不再需要為每一個 `<div>` 想 class 名字。
- **檔案極小**：自動移除未使用的 CSS (Purge)，生產環境通常小於 10KB。
- **開發體驗**：Nuxt 官方模組提供了 DevTools 整合，可直接查看顏色與間距。

---

## 2. 安裝方式 (推薦：Nuxt Module)

Nuxt 提供了一鍵安裝模組的功能，會自動處理所有繁瑣的配置。

```bash
# 最推薦：自動下載並註冊模組
npx nuxi@latest module add tailwindcss
```

### 執行後會發生什麼？
1. 自動安裝 `@nuxtjs/tailwindcss`。
2. 自動在 `nuxt.config.ts` 寫入：
   ```typescript
   export default defineNuxtConfig({
     modules: ['@nuxtjs/tailwindcss']
   })
   ```
3. 提供全域的 Tailwind 支援。

---

## 3. Nuxt 專案最小接線（實戰版）

在 `nuxt.config.ts` 確認有模組與全域 CSS：

```typescript
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss']
})
```

在 `app/assets/css/main.css` 放入：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 4. 為什麼原本 a / button 樣式會消失？

Tailwind 會啟用 **Preflight（reset）**，把瀏覽器原生樣式標準化。  
所以連結與按鈕會從「瀏覽器預設外觀」變成「較中性基底」。

### 標準做法（推薦）

不要關 Preflight，而是在 `@layer base` 補回你要的全站基礎樣式：

```css
@layer base {
  body {
    @apply bg-slate-50 text-slate-800 antialiased;
  }

  a {
    @apply text-indigo-600 underline underline-offset-2 hover:text-indigo-500;
  }

  button {
    @apply rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-100;
  }
}
```

---

## 5. 基礎語法速查

Tailwind 使用 Utility-first 概念，將 CSS 轉換為簡短的類名：

| 功能 | Tailwind Class | 對應 CSS |
|------|----------------|----------|
| **佈局** | `flex`, `grid`, `block` | `display: ...` |
| **間距** | `p-4`, `m-2`, `mt-8` | `padding`, `margin` |
| **顏色** | `text-blue-500`, `bg-gray-100` | `color`, `background-color` |
| **字體** | `text-xl`, `font-bold` | `font-size`, `font-weight` |
| **尺寸** | `w-full`, `h-64`, `max-w-md` | `width`, `height` |
| **圓角** | `rounded-lg`, `rounded-full` | `border-radius` |

---

## 6. 響應式設計與互動

Tailwind 內建了強大的前綴系統，不需要寫 `@media` 查詢。

### 響應式 (Responsive)
- `text-base md:text-xl`：手機上是標準字體，桌面端 (md) 變成大字體。
- `flex-col lg:flex-row`：手機上垂直排列，大螢幕 (lg) 變成水平排列。

### 互動狀態 (Interactivity)
- `bg-blue-500 hover:bg-blue-600`：滑鼠移上去時變深。
- `focus:ring-2`：輸入框點擊時出現環狀邊框。

---

## 7. 高階技巧：自定義配置

如果需要自定義品牌顏色或字體，在根目錄建立 `tailwind.config.ts`：

```typescript
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: '#3B82F6' // 增加你的品牌色
      }
    }
  }
}
```

---

## 8. UX 提升小秘訣

1. **暗黑模式**：使用 `dark:bg-slate-900` 輕鬆實作切換。
2. **漸層色**：`bg-gradient-to-r from-cyan-500 to-blue-500`。
3. **過渡動畫**：`transition-all duration-300` 讓顏色變化變順滑。

---

## 9. 今日進度（nuxt-demo）

- [x] 已安裝 `@nuxtjs/tailwindcss`
- [x] 已接上 `app/assets/css/main.css`
- [x] 已將首頁、`posts` 導覽、`backstage/upload` 改為 Tailwind 風格
- [x] 已處理 Preflight 導致的原生樣式消失（用 `@layer base` 補基礎樣式）
