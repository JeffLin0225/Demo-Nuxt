<template>
  <div>
    <AppHeader/>
    <main style="padding: 20px; min-height: 80vh;">
<!--      每一頁不同會注入這裡-->
      <slot />
    </main>
  </div>

<!--  共用 footer-->
  <footer style="text-align: center; padding: 10px; background: #f5f5f5;">

    <p> 2026  My Nuxt Demo </p>
  </footer>
</template>
