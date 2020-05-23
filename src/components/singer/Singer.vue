<template>
    <div class="singer">

        <ListView :singers='singers' v-if="!flag"></ListView>

        <Loading v-if="flag"></Loading>

    </div>
</template>

<script>
    import Loading from "../../base/loading/loading";
    import {getSingerList} from "../../api/singer";
    import ListView from "../../base/listview/listview";

    export default {
        name: "Singer",
        components: {
            Loading,
            ListView
        },
        data() {
            return {
                page: 1,
                maxPage: 5,
                tmpSingers: [],
                singers: [],
                flag: true
            }
        },
        created() {
            //请求歌手接口数据
            this._getSingerList()

        },
        watch: {
            tmpSingers() {
                if (this.page === (this.maxPage - 1)) {
                    this._normalizeSingers()
                }
            }
        },
        methods: {
            _getSingerList() {
                if (this.page <= this.maxPage) {
                    getSingerList(this.page).then(singers => {
                        this.tmpSingers = [...this.tmpSingers, ...singers]

                        this.page++
                        this._getSingerList()
                    })
                }
            },
            _normalizeSingers() {
                let _lists = {
                    // '张':{
                    //     text: '张',
                    //     items: [{}, {}],
                    // }
                }

                this.tmpSingers.map(singer => {
                    const name = singer.singer_name[0] //每个歌手的名称的第一个字
                    if (!_lists[name]) {
                        _lists[name] = {
                            text: name,
                            items: []
                        }
                    }
                    _lists[name].items.push(singer)
                })

                // console.log(_lists)

                let _lists_array = []

                for (let o in _lists) {
                    _lists_array.push(_lists[o])
                }
                _lists_array.sort((group1, group2) => {
                    return group1.text.charCodeAt(0) > group2.text.charCodeAt(0) ? 1 : -1
                })


                // //不够4个人的单元过滤掉
                // let arr  = _lists_array.filter((group)=>{

                // 	if(group.items.length>=3){
                // 		return true
                // 	}
                //  })

                this.singers = _lists_array
                this.flag = false
                // console.log(_lists_array)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/variable'

    .singer
        width 100%
        height 100%
        overflow hidden
        background-color $color-background
</style>