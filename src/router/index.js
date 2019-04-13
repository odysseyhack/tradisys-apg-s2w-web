import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // ###########################
    // #  Reg/Login/Restore API
    // ###########################
    {
      path: '/register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/restore',
      component: () => import('@/views/Register.vue')
    },
    // ###########################
    // #  Customer's API
    // ###########################
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
    // ###########################
    // #  Providers's API
    // ###########################
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
    // ###########################
    // #  Organization's API
    // ###########################
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
