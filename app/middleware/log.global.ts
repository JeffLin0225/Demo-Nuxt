export default defineNuxtRouteMiddleware((to, from) => {
    // 只要檔名帶有 .global，這個函式就會在全站每一次路由切換時執行
    
    // 我們可以利用它來做流量追蹤、Log 記錄，或是全站性的初始化檢測
    console.log('🚀 [Global Middleware] 偵測到路徑切換：');
    console.log(`   🏠 從：${from.path}`);
    console.log(`   🎯 往：${to.path}`);

    // 注意：全域中間件不需要回傳任何東西（除非你要強制轉向）
});
