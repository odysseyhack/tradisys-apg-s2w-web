// ###########################
// #  Customer's API
// ###########################
export default {
  path: '/customer',
  component: () => import('@/views/inner/customer/Root.vue'),
  children: [
    {
      path: '',
      component: () => import('@/views/inner/customer/Dashboard.vue')
    },
    {
      path: 'tasks',
      component: () => import('@/views/inner/customer/tasks/Tasks.vue')
    },
    {
      path: 'tasks/completed',
      component: () => import('@/views/inner/customer/tasks/Completed.vue')
    },
    {
      path: 'achievments',
      component: () => import('@/views/inner/customer/Achievments.vue')
    }
  ]
}
