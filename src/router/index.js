import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Me from 'components/me/me'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/mgtm/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/me',
      component: Me
    }
  ],
  linkActiveClass: 'mui-active'
})
