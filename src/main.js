// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
// 解决移动端点击300毫秒延时问题
import fastClick from 'fastclick'
// css初始化
import 'styles/reset.css'
// 1像素边框解决方案
import 'styles/border-1px.css'
import 'styles/iconfont.css'

import 'swiper/dist/css/swiper.css'

import store from './store/index'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
