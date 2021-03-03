import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element, { Divider } from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import moment from 'moment'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

// 引入echarts
import echarts from 'echarts'
import { _k } from "@/utils/timeFormat"
Vue.prototype.$echarts = echarts
Vue.prototype.$k = _k


// 引入自定义样式
import './assets/css/layout.scss'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.filter('t', function (value) {
  if (value) {
    if (value === 'new') {
      return moment().format('YYYY-MM-DD');
    }
    return moment(value).format('YYYY-MM-DD');//默认第一个参数就是默认要过滤的那个值
  }

})
Vue.config.productionTip = false


// 全局组件   
import plugins from '@/components/common/index'
Vue.use(plugins);



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
