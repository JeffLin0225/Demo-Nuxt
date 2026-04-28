<script setup lang="ts">
</script>
<template>

    <!-- 左邊的側邊欄 -->
    <aside style="width: 200px; background: #EC9999FF; color: #b1ec99; height: 100vh;">
      <h2>管理員選單</h2>
      <ul>
        <li><NuxtLink to="/backstage">總覽</NuxtLink></li>
        <li><NuxtLink to="/backstage/upload">上傳檔案</NuxtLink></li>
        <li><NuxtLink to="/">回前台</NuxtLink></li>
      </ul>
    </aside>

</template>
