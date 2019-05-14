// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/css/mui.min.css'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: require('assets/logo.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
