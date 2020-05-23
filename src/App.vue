<template>
    <div>
        <!-- 头部 -->
        <Header></Header>
        <!-- 操作区 路由链接 -->
        <Tab></Tab>

        <!-- 点击路由的主题 -->
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Tab from "./components/Tab";

    export default {
        components: {
            Header,
            Tab
        }
    }
</script>

<style>

</style>
