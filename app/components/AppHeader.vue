<template>
  <header class="border-b border-slate-200 bg-white">
    <nav class="mx-auto flex max-w-6xl items-center gap-5 px-6 py-4">
      <NuxtLink to="/" class="text-sm font-medium text-slate-700 hover:text-indigo-600">首頁</NuxtLink>
      <NuxtLink to="/posts" class="text-sm font-medium text-slate-700 hover:text-indigo-600">Posts</NuxtLink>
      <NuxtLink to="/about" class="text-sm font-medium text-slate-700 hover:text-indigo-600">關於</NuxtLink>
      <NuxtLink to="/contact" class="text-sm font-medium text-slate-700 hover:text-indigo-600">聯絡我</NuxtLink>
      <NuxtLink to="/backstage" class="text-sm font-medium text-slate-700 hover:text-indigo-600">後台</NuxtLink>

      <div class="ml-auto flex items-center gap-2">
        <span v-if="isAuth" class="text-sm text-emerald-700">✅ 已登入</span>
        <button
          v-if="isAuth"
          class="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
          @click="logout"
        >
          登出
        </button>
        <NuxtLink
          v-else
          to="/login"
          class="rounded-md bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-500"
        >
          登入
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { isAuth, logout } = useAuthState();
</script>
