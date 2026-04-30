<template>
  <div class="layout-admin">
    <aside class="sidebar">
      <div class="logo">後台管理系統</div>
      <nav>
        <NuxtLink to="/">⬅️ 返回首頁</NuxtLink>
        <NuxtLink to="/backstage" exact-active-class="active">後台總覽</NuxtLink>
        <NuxtLink to="/backstage/upload" exact-active-class="active">檔案管理</NuxtLink>
      </nav>
      <div class="user-info">
        <button @click="logout">安全登出</button>
      </div>
    </aside>

    <main class="content">
      <header class="admin-header">
        <h1>後台管理區</h1>
      </header>
      <div class="page-body">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
const { logout } = useAuthState();
</script>

<style scoped>
.layout-admin {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 240px;
  background: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
}
.logo {
  padding: 2rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid #3e4f5f;
}
nav {
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
nav a {
  padding: 1rem;
  color: #ccc;
  text-decoration: none;
}
nav a:hover, nav a.active {
  background: #34495e;
  color: white;
}
.user-info {
  padding: 1rem;
  border-top: 1px solid #3e4f5f;
}
.content {
  flex: 1;
  overflow-y: auto;
  background: #f4f7f6;
}
.admin-header {
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.page-body {
  padding: 2rem;
}
button {
  width: 100%;
  padding: 0.5rem;
  background: #e74c3c;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
