import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import * as types from '../store/mutation-types'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})

router.afterEach((to, from, next) => {
})

// 页面刷新时，重新赋值token。vuex中数据，会在页面刷新时丢失
if (window.localStorage.getItem('token')) {
  store.commit(types.RELOGIN, window.localStorage.getItem('token'))
}

export default router
