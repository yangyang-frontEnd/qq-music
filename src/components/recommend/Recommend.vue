<template>
    <div class="recommend">
        <div class="recommend-content">
            <!-- 轮播 -->
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in RecommendLists">
                    <img :src="item.pic_info.url" alt="" class="itemimg">
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>

    </div>
</template>

<script>
    import {getRecommend} from '../../api/recommend'

    export default {
        name: "Recommend",
        data() {
            return {
                RecommendLists: [],
                swiperOption: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 1000,
                        stopOnLastSlide: false,// 停止轮播
                        disableOnInteraction: false,//禁用交互
                    }
                }
            }
        },
        created() {
            this._getRecommend()
        },
        methods: {
            _getRecommend() {
                getRecommend().then(res => {
                    // console.log(res)
                    // 获取推荐页面的歌单
                    this.RecommendLists = res
                })


            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/variable.styl'
    .recommend
        width: 100%
        top 124px
        bottom 0
        position fixed
        background-color $color-background

        .recommend-content
            height 100%
            overflow: hidden

            .itemimg
                width: 100%

            .recommed-list
                width: 94%
                margin: 0 auto
                overflow hidden

            .list-title
                width: 100%
                font-size: $font-size-medium-x;
                color: $color-text
                margin: 20px 0 10px 0;
                font-weight: 400;

            .list_ul
                width: 100%
                display: flex
                flex-wrap: wrap
                justify-content: space-between
                align-items: center

                .item
                    width: 48%
                    height: 212px
                    float: left

                    .icon
                        width: 100%
                        height: 158.7px

                        img
                            width: 100%
                            height: 158.7px

                    .txt
                        font-size: $font-size-medium
                        margin: 6px 0

                    .text
                        font-size: $font-size-small
                        margin: 6px 0
                        color: $color-text-ll
                        white-space nowrap
                        text-overflow ellipsis
                        overflow hidden

</style>