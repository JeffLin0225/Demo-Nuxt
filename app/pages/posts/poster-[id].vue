<template>
  <div>
    <h1>{{ post?.title }}</h1>
    <p>{{ post?.body }}</p>
    <NuxtLink to="/posts">← 回列表</NuxtLink>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
interface Post {
  id: string
  title: string
  body: string
}

const { data: post } = await useFetch<Post>(`/api/posts/${route.params.id}`)

</script>

