<template>
  <div class="layout-default">
    <AppHeader />

    <main class="container">
      <slot />
    </main>

    <footer class="app-footer">
      <p>&copy; 2026 Nuxt Fullstack Demo</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  min-height: 70vh;
  padding: 2rem;
}
.app-footer {
  padding: 1rem;
  text-align: center;
  background: #f9f9f9;
}
</style>
