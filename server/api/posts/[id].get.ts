export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const post = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return post
})