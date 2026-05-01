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