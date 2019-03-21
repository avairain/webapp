/*
  Edited By: @yuxulong
  Edited Time: 2017-07-10
  Description: 路由配置
*/
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// view
const Main = () => import('../view/main/Main.vue')

// component
const Dashboard = () => import('@/components/dashboard/Dashboard.vue')
const Hello = () => import('../components/HelloWorld.vue')
const Test = () => import('../components/test.vue')
const Ydyl = () => import('../components/Ydyl')

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          redirect: 'ydyl'
        },
        {
          path: 'dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/ydyl',
      component: Ydyl
    }
  ]
})
