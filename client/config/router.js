import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history' // 默认值 'hash'
    // base: '/base/' // 基路劲配置
  })
}
