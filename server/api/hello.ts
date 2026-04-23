export default defineEventHandler((event) => {
    return {
        message: 'Hello from Nitro! 🚀',
        timestamp: new Date().toISOString(),
        // 這裡的所有邏輯都跑在 server 端，瀏覽器完全看不到原始碼
    }
})
