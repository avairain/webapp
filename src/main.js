// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
                           _ooOoo_
                          o8888888o
                          88' . '88
                          (| -_- |)
                           O\ = /O
                       ____/`---'\____
                     .   ' \\| |// `.
                      / \\||| : |||// \
                    / _||||| -:- |||||- \
                      | | \\\ - /// | |
                    | \_| ''\---/'' | |
                     \ .-\__ `-` ___/-. /
                  ___`. .' /--.--\ `. . __
               .'' '< `.___\_<|>_/___.' >'''.
              | | : `- \`.;`\ _ /`;.`/ - ` : | |
                \ \ `-. \_ __\ /__ _/ .-` / /
        ======`-.____`-.___\_____/___.-`____.-'======
                           `=---='

        .............................................
                 佛祖镇楼                  BUG辟易
            佛曰:
                 写字楼里写字间，写字间里程序员；
                 程序人员写程序，又拿程序换酒钱。
                 酒醒只在网上坐，酒醉还来网下眠；
                 酒醉酒醒日复日，网上网下年复年。
                 但愿老死电脑间，不愿鞠躬老板前；
                 奔驰宝马贵者趣，公交自行程序员。
                 别人笑我忒疯癫，我笑自己命太贱；
                 不见满街漂亮妹，哪个归得程序员？ */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
Vue.prototype.$Axios = axios

Vue.use(ElementUI)

const Bus = new Vue()

router.beforeEach((to, from, next) => {
  if ((!window.sessionStorage.getItem('rtm_user_token')) && !/captcha|login/i.test(to.fullPath)) {
    // return router.push('/login')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data: {
    Bus
  },
  components: {
    App
  }
})
