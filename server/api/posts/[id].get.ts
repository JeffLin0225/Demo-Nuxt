export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    if (!id || !/^\d+$/.test(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'id must be a numeric value',
        })
    }

    try {
        const post = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return post
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error?.message || 'Failed to fetch post',
        })
    }
})