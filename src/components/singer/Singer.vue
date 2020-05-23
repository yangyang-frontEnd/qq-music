<template>
    <div class="singer">
        <Loading></Loading>
    </div>
</template>

<script>
    import Loading from "../../base/loading/loading";
    import {getSingerList} from "../../api/singer";

    export default {
        name: "Singer",
        components:{
            Loading
        },
        data(){
            return {

            }
        },
        created(){
            //请求歌手接口数据
            this._getSingerList()
        },
        methods:{
            _getSingerList(){
                getSingerList(1).then(singers=>{
                    this._normalizeSingers(singers)
                })
            },
            _normalizeSingers(list) {
                let _lists = {
                    // '张':{
                    //     text: '张',
                    //     items: [{}, {}],
                    // }
                }

                list.map(singer => {
                    const name = singer.singer_name[0] //每个歌手的名称的第一个字
                    if(!_lists[name]){
                        _lists[name] ={
                            text:name,
                            items:[]
                        }
                    }
                    _lists[name].items.push(singer)
                })

                console.log(_lists)
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