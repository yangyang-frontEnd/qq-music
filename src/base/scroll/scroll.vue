<template>
    <div ref="wrapper">
        <!--需要滚动的dom结构-->
        <div>
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        props: {
            scroll: {
                type: String,
                default: 'Y'
            },
            click: {
                type: Boolean,
                default: false
            },
            data: {
                type: Array,
                default: []
            },
        },
        name: "scroll",
        data() {
            return {
                scroll_obj: {}
            }
        },
        mounted() {
            setTimeout(() => {
                this.initScroll()
            }, 20)
        },
        methods: {
            initScroll() {
                if (!this.$refs.wrapper) {
                    throw new Error('浏览器还没渲染好dom ，请刷新后再试')
                }

                let scrollYX = (this.scroll === 'Y' ? {scrollY: true, scrollX: false} : {scrollX: true, scrollY: false})
                //  初始化滚动dom结构
                // let wrapper = document.querySelector('.wrapper')
                this.scroll_obj = new BScroll(this.$refs.wrapper, {
                    ...scrollYX,
                    click: this.click
                })
                console.log(this.scroll_obj)
            },
            refresh() {
                this.scroll && this.scroll_obj.refresh()
            }
        },
        watch: {
            data() {
                //让scroll 重新计算高度
                setTimeout(() => {
                    this.refresh()
                }, 20)


            }
        }
    }
</script>

<style scoped>

</style>