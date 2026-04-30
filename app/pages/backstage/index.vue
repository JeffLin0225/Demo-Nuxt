<template>
  <div>
    <h2>歡迎來到後台總覽</h2>
    <p>這裡只有登入後才能看到。</p>
    
    <div class="stats-grid">
      <div class="card">
        <h3>用戶數</h3>
        <p>99+</p>
      </div>
      <div class="card">
        <h3>今日瀏覽</h3>
        <p>1,234</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 指定使用 admin layout
// 指定使用 auth middleware
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
});
</script>

<style scoped>
.stats-grid {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  flex: 1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
</style>