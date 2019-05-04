import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/Home') // 异步加载组件
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail/Detail')
    }
  ]
})
