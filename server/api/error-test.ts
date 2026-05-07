export default defineEventHandler(async (event) => {
    // 模擬後端發生致命錯誤（例如資料庫連不進去）
    throw createError({
        statusCode: 500,
        statusMessage: '後端資料庫連線超時 (模擬錯誤)',
        fatal: true
    })
})
