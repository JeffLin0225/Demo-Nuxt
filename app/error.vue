<script setup lang="ts">
// Nuxt 會自動將錯誤物件作為 props 傳入
const props = defineProps({
  error: Object
})

// 處理點擊「回到首頁」的動作，這會清除 Nuxt 的錯誤狀態
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-container">
    <div class="error-card">
      <div class="error-icon">
        <span v-if="error?.statusCode === 404">🔍</span>
        <span v-else>⚠️</span>
      </div>
      
      <h1 class="error-title">
        {{ error?.statusCode === 404 ? '找不到此頁面' : '系統發生錯誤' }}
      </h1>
      
      <p class="error-message">
        {{ error?.message || '別擔心，這不是你的錯，我們會盡快修復。' }}
      </p>

      <div class="error-details" v-if="error?.statusCode !== 404">
        <code>Status: {{ error?.statusCode }}</code>
      </div>

      <button class="home-btn" @click="handleError">
        回到首頁
      </button>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: sans-serif;
}

.error-card {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.error-title {
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.error-message {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.error-details {
  background: #f1f5f9;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  margin-bottom: 2rem;
  color: #94a3b8;
}

.home-btn {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.home-btn:hover {
  background-color: #2563eb;
}
</style>
