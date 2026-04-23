export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log('📬 收到聯繫表單:', body)
    if (!body.name || !body.message) {
        throw createError({
            statusCode: 400,
            statusMessage: '請填寫姓名和訊息',
        })
    }
    return {
        success: true,
        received: body,
        processedAt: new Date().toISOString(),
    }
})

