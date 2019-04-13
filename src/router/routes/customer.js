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
    }
  ]
}
