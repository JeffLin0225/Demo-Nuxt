// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
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

  }
})
