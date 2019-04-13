import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/customer',
      component: () => import('@/views/inner/customer/Root.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/inner/customer/Dashboard.vue')
        }
      ]
    },
    {
      path: '/provider',
      component: () => import('@/views/inner/provider/Root.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/inner/provider/Dashboard.vue')
        }
      ]
    },
    {
      path: '/org',
      component: () => import('@/views/inner/org/Root.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/inner/org/Dashboard.vue')
        }
      ]
    }
  ]
})
