// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from '@/store'
import ajax from '@/utils/ajax'

import VueWechatTitle from 'vue-wechat-title'

import vant from 'vant'
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';


import App from './App'


Vue.config.productionTip = false

// Global methods
Vue.prototype.$ajax = ajax
Vue.prototype.$net = ajax


Vue.use(vant)
Vue.use(VueWechatTitle)


// 事件总线
Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
