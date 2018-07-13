/*
  Edited By: @yuxulong
  Edited Time: 2017-07-10
  Description: 路由配置
*/
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let Hello = () => import('../components/HelloWorld.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: Hello
    }
  ]
})
