export default defineEventHandler(async (event) => {
    const posts = await $fetch('https://jsonplaceholder.typicode.com/posts')
    return posts
})