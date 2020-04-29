import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import fastclick from 'fastclick';
fastclick.attach(document.body);

import './common/stylus/index.styl';

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
