<script setup lang="ts">
</script>
<template>
  <!-- 最外層：左右排版 -->
  <div style="display: flex; min-height: 100vh;">
    
    <!-- 左邊的側邊欄 -->
    <BackStageHeader />

    <!-- 右邊的區塊 (包含內容與 Footer)：上下排版 -->
    <div style="flex: 1; display: flex; flex-direction: column;">
      
      <!-- 主要內容區塊 -->
      <main style="flex: 1; padding: 20px;">
        <slot /> <!-- 後台頁面的內容會塞在這裡 -->
      </main>
      
      <!-- Footer 放在右邊區塊的最下面 -->
      <footer style="text-align: center; padding: 10px; background: #f5f5f5;">
        <p> 2026 My Nuxt Demo </p>
      </footer>

    </div>

  </div>
</template>
