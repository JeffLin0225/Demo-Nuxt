export default defineEventHandler(async (event) => {
    const body = await readBody(event) || {}
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    console.log('📬 收到聯繫表單:', body)
    if (!name || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: '請填寫姓名和訊息',
        })
    }

    return {
        success: true,
        received: {
            name,
            message,
        },
        processedAt: new Date().toISOString(),
    }
})

