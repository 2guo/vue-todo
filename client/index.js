import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

// vue-router 全局导航守卫
router.beforeEach((to, from, next) => {
  console.log('router.beforeEach', to, from)
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('router.beforeResolve', to, from)
  next()
})

router.afterEach((to, from) => {
  console.log('router.afterEach', to, from)
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
