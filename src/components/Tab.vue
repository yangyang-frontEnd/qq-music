<template>
    <div class="tab">
        <router-link class="tab-item" to='/recommend'>推荐</router-link>
        <router-link class="tab-item" to='/singer'>歌手</router-link>
        <router-link class="tab-item" to='/rank'>排行</router-link>
        <router-link class="tab-item" to='/search'>搜索</router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>

<style lang="stylus" scoped>
    @import '../common/stylus/variable.styl'

    .tab
        display flex
        height 44px
        line-height 44px
        font-size $font-size-medium

        .tab-item
            flex: 1
            text-align: center

            .tab-link
                padding-bottom: 5px

            &.router-link-active // & 同时代表具备.tab-item 和 router-link-active ,显示下面的样式
                color: $color-theme
                border-bottom: 2px solid $color-theme
</style>