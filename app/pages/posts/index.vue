<template>
  <div>
    <h1>📋 文章列表</h1>
    <!-- 載入中 -->
    <p v-if="pending">Loading...</p>
    <!-- 錯誤 -->
    <p v-else-if="error">出錯了：{{ error.message }}</p>
    <!-- 資料 -->
    <ul v-else>
      <PostCard v-for="post in posts" :key="post.id" :post="post" @select="doSelect"/>
    </ul>
  </div>
</template>
<script setup lang="ts">

interface Post {
  id: number
  title: string
  body?: string
}

const {data: posts , pending, error } = await useFetch<Post[]>('/api/posts');
const doSelect = (id: number) =>{
  navigateTo(`/posts/poster-${id}`)
}
</script>