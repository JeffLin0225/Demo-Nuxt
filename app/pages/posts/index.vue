<template>
  <div>
    <h1>📋 文章列表</h1>
    <!-- 載入中 -->
    <p v-if="pending">Loading...</p>
    <!-- 錯誤 -->
    <p v-else-if="error">出錯了：{{ error.message }}</p>
    <!-- 資料 -->
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/poster-${post.id}`">
          {{ post.id }}. {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface Post {
  id: string
  title: string
}

const {data: posts , pending, error } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
</script>