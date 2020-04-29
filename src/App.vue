<template>
    <div>
        <Header></Header>
        <Tab></Tab>
        <router-view></router-view>
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
