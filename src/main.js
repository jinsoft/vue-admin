import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import '@/styles/index.scss' //global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang'
import './icons' // icon
import './permission' // permission control

import * as filters from './filters' // 全局过滤

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})