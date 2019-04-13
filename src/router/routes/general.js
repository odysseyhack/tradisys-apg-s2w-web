// ###########################
// #  Reg/Login/Restore API
// ###########################
export default [
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
  }
]
