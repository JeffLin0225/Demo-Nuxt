<template>
  <div class="layout-default">
    <header class="app-header">
      <nav>
        <NuxtLink to="/">首頁</NuxtLink>
        <NuxtLink to="/about">關於</NuxtLink>
        <NuxtLink to="/backstage">進入後台 (受保護)</NuxtLink>
        
        <div class="auth-box">
          <span v-if="isAuth">✅ 已登入</span>
          <button v-if="isAuth" @click="logout">登出</button>
          <NuxtLink v-else to="/login">登入</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="container">
      <slot />
    </main>

    <footer class="app-footer">
      <p>&copy; 2026 Nuxt Fullstack Demo</p>
    </footer>
  </div>
</template>

<script setup>
const { isAuth, logout } = useAuthState();
</script>

<style scoped>
.app-header {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
}
.auth-box {
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.container {
  min-height: 70vh;
  padding: 2rem;
}
.app-footer {
  padding: 1rem;
  text-align: center;
  background: #f9f9f9;
}
button {
  cursor: pointer;
}
</style>
