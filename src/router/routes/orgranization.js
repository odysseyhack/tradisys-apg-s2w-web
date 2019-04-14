// ###########################
// #  Organization's API
// ###########################
export default {
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
      path: 'tasks/closed',
      component: () => import('@/views/inner/org/tasks/Closed.vue')
    },
    {
      path: 'tasks/rejected',
      component: () => import('@/views/inner/org/tasks/Rejected.vue')
    },
    {
      path: 'tasks/create',
      component: () => import('@/views/inner/org/tasks/Create.vue')
    }
  ]
}
