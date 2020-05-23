import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* 手机web_APP 存在移动端点击事件的300毫秒延迟问题
	1.npm install fastclick
	2.引入 并使用
*/
import fastclick from 'fastclick';
fastclick.attach(document.body);

/*
	css预处理器, 让css具备编程能力的工具 ,变量 流程控制,函数调用..
		分类:
			stylus sass less

		作用:
			主题换肤 ,  全局设置 变量 控制主题

		下载预编译器 stylus
			npm install stylus stylus-loader

		使用预处理器对全局样式设置
			1.消除不同浏览器内核对css解析的差异化问题 reset.styl
			2.对全局的html 和 body 标签进行设置  base.styl
			3.引入项目需要的字体图标 icon.styl
*/
import './common/stylus/index.styl';

/*
	继承轮播插件
		1.下载 插件
		2.初始化
		3.使用

*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

//集成图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  loading: './common/image/img.png',
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
