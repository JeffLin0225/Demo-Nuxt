<template>
  <div>
    <h1>📖 關於頁面</h1>
    <p>這是 pages/about.vue，對應路由：/about</p>
    <hr>
    <div>
      <p>測試composables:</p>
      <p>計數器：{{count}}</p>
      <button @click = 'increment()'>家家</button>
      <button @click = 'decrement()'>簡簡</button>
    </div>
    <div>
      <p>測試composables2:</p>
      <p style="color: azure; background-color:black">台灣時間：{{formatData(new Date())}}</p>
    </div>
    <NuxtLink to="/">← 回首頁</NuxtLink>
  </div>
</template>

<script setup lang="ts">
 const {count , increment , decrement } = useCounter()

</script>
