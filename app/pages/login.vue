<template>
  <div class="login-page">
    <h1>管理員登入</h1>
    <p>目前的登入狀態：{{ isAuth ? '已登入' : '未登入' }}</p>
    
    <div class="login-card">
      <p v-if="!isAuth">這是一個模擬登入頁面，點擊下方按鈕即可獲得後台權限。</p>
      <button v-if="!isAuth" @click="handleLogin" class="btn-login">模擬登入</button>
      <div v-else>
        <p>你已經登入囉！</p>
        <button @click="navigateTo('/backstage')" class="btn-go">進入後台</button>
      </div>
    </div>

    <NuxtLink to="/">回首頁</NuxtLink>
  </div>
</template>

<script setup>
const { isAuth, login } = useAuthState();

const handleLogin = () => {
  login();
  // 登入後自動導向後台
  navigateTo('/backstage');
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
.login-card {
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  margin: 1rem 0;
}
.btn-login {
  background: #42b883;
  color: white;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-go {
  background: #35495e;
  color: white;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
