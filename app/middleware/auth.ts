export default defineNuxtRouteMiddleware((to, from) => {
    const { isAuth } = useAuthState();

    // 如果沒登入，且要去的地方不是登入頁
    if (!isAuth.value && to.path !== '/login') {
        console.log('🛑 [Middleware] 未登入，攔截並導向 /login');
        return navigateTo('/login');
    }

    console.log('✅ [Middleware] 已登入或目標為公開頁面，准予通過');
});
