<template>
    <div @click="$emit('select',post.id)">
        <h3> #{{ post.id }} {{ post.title }}</h3>
        <p> {{ post.body }}</p>
    </div>
</template>

<script setup lang="ts">
    // 父 -> 子
    defineProps<{
        post:{
            id: number,
            title: string,
            body?: string,
        }
    }>()

    // 子 -> 父
    defineEmits<{
        (e: 'select' , id: number): void
    }>()

</script>

