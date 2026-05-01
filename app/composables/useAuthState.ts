export const useAuthState = () => {
    // 使用 useState 建立一個跨頁面共享的登入狀態
    // Nuxt 的 useState 會處理 SSR 的伺服器與客戶端狀態同步
    const isAuth = useState<boolean>('is-auth', () => false);

    const login = () => {
        isAuth.value = true;
    };

    const logout = () => {
        isAuth.value = false;
        // 登出後導向首頁
        navigateTo('/');
    };

    return {
        isAuth,
        login,
        logout
    };
};
