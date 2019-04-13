import { Router } from '@/modules'

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
        },
        {
          path: 'list',
          component: () => import('@/views/inner/provider/List.vue')
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
        },
        {
          path: 'tasks/open',
          component: () => import('@/views/inner/org/tasks/Open.vue')
        },
        {
          path: 'tasks/progress',
          component: () => import('@/views/inner/org/tasks/Progress.vue')
        },
        {
          path: 'tasks/completed',
          component: () => import('@/views/inner/org/tasks/Completed.vue')
        },
        {
          path: 'tasks/rejected',
          component: () => import('@/views/inner/org/tasks/Rejected.vue')
        }
      ]
    }
  ]
})
