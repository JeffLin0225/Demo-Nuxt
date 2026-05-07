<template>
  <main class="min-h-screen bg-slate-50">
    <section class="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p class="text-sm font-medium text-indigo-600">Nuxt Fullstack Demo</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Home 首頁
        </h1>
        <p class="mt-3 text-slate-600">
          歡迎回來，這裡是你的 Nuxt 練習專案首頁。下面的區塊可以快速進入主要功能頁面。
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <NuxtLink
            to="/about"
            class="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            <p class="text-sm font-semibold text-slate-900 group-hover:text-indigo-700">About</p>
            <p class="mt-1 text-sm text-slate-600">查看這個專案的介紹與學習背景。</p>
          </NuxtLink>

          <NuxtLink
            to="/posts"
            class="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            <p class="text-sm font-semibold text-slate-900 group-hover:text-indigo-700">Posts API</p>
            <p class="mt-1 text-sm text-slate-600">查看 useFetch + server/api 的資料流程。</p>
          </NuxtLink>

          <button
            @click="triggerError"
            class="group rounded-xl border border-red-200 bg-red-50 p-4 text-left transition hover:border-red-300 hover:bg-red-100"
          >
            <p class="text-sm font-semibold text-red-900 group-hover:text-red-700">🔥 測試前端崩潰</p>
            <p class="mt-1 text-sm text-red-600">直接在前端 throw 錯誤。</p>
          </button>

          <button
            @click="triggerApiError"
            class="group rounded-xl border border-orange-200 bg-orange-50 p-4 text-left transition hover:border-orange-300 hover:bg-orange-100"
          >
            <p class="text-sm font-semibold text-orange-900 group-hover:text-orange-700">📡 測試後端崩潰</p>
            <p class="mt-1 text-sm text-orange-600">呼叫後端 API 並讓它噴回 500。</p>
          </button>

          <NuxtLink
            to="/backstage"
            class="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            <p class="text-sm font-semibold text-slate-900 group-hover:text-indigo-700">Backstage</p>
            <p class="mt-1 text-sm text-slate-600">進入後台功能（含 R2 上傳練習頁）。</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// 設定全站 SEO 資訊
useSeoMeta({
  title: '我的 Nuxt 4 實驗室',
  ogTitle: '我的 Nuxt 4 實驗室 - 全端開發實戰',
  description: '這是一個基於 Nuxt 4 與 Cloudflare 的全端實驗專案，整合了 D1, R2 與 AI 向量搜尋。',
  ogDescription: '這是一個基於 Nuxt 4 與 Cloudflare 的全端實驗專案，整合了 D1, R2 與 AI 向量搜尋。',
  ogImage: 'https://nuxt.com/social-card.png', // 這裡可以換成你 R2 裡面的圖片網址
  twitterCard: 'summary_large_image',
})

const triggerError = () => {
  throw createError({
    statusCode: 500,
    statusMessage: '這是前端故意的測試報錯！',
    fatal: true
  })
}

const triggerApiError = async () => {
  try {
    // 呼叫那個會噴錯的 API
    await $fetch('/api/error-test')
  } catch (err) {
    // 這裡我們抓到後端錯誤後，主動呼叫全域錯誤頁面
    showError(err)
  }
}
</script>