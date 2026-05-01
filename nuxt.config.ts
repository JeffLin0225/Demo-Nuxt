// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global CSS entry for Tailwind directives.
  css: ['~/assets/css/main.css'],

  // Phase 4: 混合渲染規則 (Route Rules)
  routeRules: {
    // 首頁：改用 SWR，避免你先前 prerender 流程在 Cloudflare preview 出現噪音警告
    '/': { prerender: true },

    // 文章頁：快取 1 小時，兼顧效能與更新
    '/posts/**': { swr: 3600 },

    // 後台：純 CSR（不需要 SEO）
    '/backstage/**': { ssr: false },

    // API：開啟 CORS
    '/api/**': { cors: true }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // composables 子資料夾也自動導入
  imports: {
    dirs: ['composables/**'],
  },

  // 會去抓 .env 裡面 NUXT 開頭的變數（所以下面命名需要省略）
  runtimeConfig: {
    fileUploadMaxSize: 1048576,
    public:{
      appName: '',
      appDescription: '',
    },

  },

  modules: ['@nuxtjs/tailwindcss']
})