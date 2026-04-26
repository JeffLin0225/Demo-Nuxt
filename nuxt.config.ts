// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 會去抓 .env 裡面 NUXT 開頭的變數（所以下面命名需要省略）
  runtimeConfig: {
    //

    public:{
      appName: '',
      appDescription: '',
    },

  }
})
