<template>
    <div class="recommend">
        <Scroll class="recommend-content" :scroll="scroll" :click="scrollClick" :data='DiskList'>
            <div v-if='RecommendLists.length>0 && DiskList.length>0 '>
                <!-- 轮播 -->
                <swiper class="swiper" :options="swiperOption" v-if='isKeepAlive'>

                    <swiper-slide v-for="(item,index) in RecommendLists" :key="index">
                        <img :src="item.pic_info.url" alt="" class="itemimg">
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>

                <!-- 歌单数据 -->
                <div class='recommed-list' v-for='(item, index)  in DiskList' :key='index'>
                    <p class='list-title'>{{item.title}}</p>
                    <ul class='list_ul'>
                        <li class='item' v-for='(disk,_index) in item.items' :key='_index'>
                            <div class='icon'>
                                <img v-lazy="disk.img_url" alt="">
                            </div>
                            <p class='text'>{{disk.text}}</p>
                            <p class='text'>播放量 : {{disk.num}} 万</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else>
                <Loading title='正在加载...'/>
            </div>
        </Scroll>
    </div>
</template>

<script>
    import {getRecommend, getDiskList} from '../../api/recommend'
    import Scroll from '../../base/scroll/scroll'
    import Loading from '../../base/loading/loading.vue'


    export default {
        components: {
            Scroll,
            Loading
        },
        name: "Recommend",
        data() {
            return {
                isKeepAlive: false,
                scroll: 'Y',
                scrollClick: true,
                RecommendLists: [],
                DiskList: [],
                swiperOption: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 1000,
                        stopOnLastSlide: false,// 停止轮播
                        disableOnInteraction: true,//禁用交互
                    }
                }
            }
        },
        created() {
            //注释习惯

            /*获取轮播图的数据
            * 参数：参数1 number
            *       参数2 array
            * 返回：类型
            * */

            this._getRecommend()

            //获取推荐页面的歌单数据
            this._getDiskList()

            //模拟延迟
            // setTimeout(() => {
            //     this._getRecommend()
            //     this._getDiskList()
            // }, 1000)
        },
        //keep-alive 两个生命周期
        //加载
        activated() {
            this.isKeepAlive = true
        },
        //卸载
        deactivated() {
            this.isKeepAlive = false
        },
        methods: {
            //因为上下滚动是多个页面都需要的,把滚动业务封装成一个组件
            //把需要的dom元素传进去,这个组件就能实现对该部分dom 上下滚动的需求
            //借助 插槽 的概念完成，一个组件的dom结构是由外部传递进去的
            _getRecommend() {
                getRecommend().then(res => {
                    // console.log(res)
                    // 获取推荐页面的歌单
                    this.RecommendLists = res
                })

            },
            _getDiskList() {
                getDiskList().then(res => {
                    // console.log(res.data.MusicHallHomePage.data.v_shelf)

                    //对于服务器返回的数据最好不要直接使用
                    this._normailize(res.data.MusicHallHomePage.data.v_shelf)

                    //this.DiskList = this._normailize(res.data.MusicHallHomePage.data.v_shelf)
                    this.DiskList = this._normailize(res.data.MusicHallHomePage.data.v_shelf)

                })
            },
            _normailize(data) {

                let _data = [
                    // {
                    // 	"title":'官方推荐',
                    // 	"items":[{
                    // 		img_url:,
                    // 		text:'',
                    // 		num:
                    // 	}]
                    // }
                ]

                if (data && Array.isArray(data)) {//如果服务返回数据
                    //for
                    data.forEach((item) => {
                        if (item.title_template === '分类专区') {
                            return
                        }
                        let obj = {}
                        obj.title = item.title_template
                        obj.items = []
                        if (Array.isArray(item.v_niche[0].v_card)) {
                            item.v_niche[0].v_card.forEach((disk) => {
                                let _obj = {}
                                _obj.img_url = disk.cover.replace(/300/, '600')
                                _obj.text = disk.title
                                _obj.num = (disk.cnt / 10000).toFixed(1)//获取小数点后一位
                                obj.items.push(_obj)
                            })

                            _data.push(obj)
                        } else {
                            throw new Error('遍历的数据不是一个数组')
                        }
                    })
                } else {
                    throw new Error('获取歌单数据不是一个数组')
                }


                return _data
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