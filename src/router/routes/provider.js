// ###########################
// #  Providers's API
// ###########################
export default {
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
    },
    {
      path: 'organization',
      component: () => import('@/views/inner/provider/Organization.vue')
    }
  ]
}
