import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Register from '@/components/Register'
import Login from '@/components/Login'
import Products from '@/components/Products'

Vue.use(Router)
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOneOnNavigation: true
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/candles',
      name: 'candles',
      component: Products
    },
    {
      path: '/soaps',
      name: 'soaps',
      component: Products
    }
  ]
})
