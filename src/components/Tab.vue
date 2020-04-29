<template>
    <div>
        <router-link to="/recommend">推荐</router-link>
        <span> \ </span>
        <router-link to="/singer">歌手</router-link>
        <span> \ </span>
        <router-link to="/rank">排行</router-link>
        <span> \ </span>
        <router-link to="/search">搜索</router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>

<style scoped>

</style>