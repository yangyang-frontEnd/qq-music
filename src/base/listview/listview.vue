<template>
	<Scroll class='listview' :data='singers'>
		<ul>
			<li  ref='ls' v-for='(group,index) in singers' :key='index' class='list-group'>
				<div class='list-group-list'>{{group.text}}</div>
				<ul>
					<li  v-for='(singer,i) in group.items' :key='i' class='list-group-item' >
						<img :src="singer.singer_pic"  class='avatar'>
						<span class='name'> {{singer.singer_name}}</span>
					</li>
				</ul>
			</li>	
		</ul>
<!--		<div class="list-fixed">-->
		<!--			<div class="fixed-title">a</div>-->
		<!--		</div>-->
	</Scroll>
		
</template>

<script>
	import Scroll from '../scroll/scroll'	
	export default {
		data(){
			return {
				listenScroll:true,
				currentIndex:0,
				scrollY:0,
				listHeight:[]
			}
		},
		components:{Scroll},
		props:{
			singers:{
				type:Array,
				default:[]
			}
		},

	}	
</script>

<style lang='stylus' scoped>
@import "../../common/stylus/variable"
.listview
    position fixed
    width :100%
    top 124px
    bottom 0
    overflow :hidden
    background :$color-background
    .list-group
        padding-bottom :30px
        .list-group-list
            height :26px
            line-height :26px
            padding-left :20px
            font-size:$font-size-small
            color:$color-text-d 
            background :$color-theme
        .list-group-item
            display :flex
            align-items :center
            padding:20px 0 0 30px
            .avatar
                width :50px
                height :50px
                border-radius:50%
            .name
                margin-left :20px
                font-size :$font-size-medium
                color :$color-text
    .list-fixed
        position:absolute
        top:0
        left:0
        width:100%
        .fixed-title
            height:26px
            line-height:26px
            padding-left :20px
            font-size:$font-size-small
            color:$color-text-d
            background :$color-theme 
			
</style>
