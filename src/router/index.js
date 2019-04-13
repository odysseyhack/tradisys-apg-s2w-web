import { Router } from '@/modules'
import routesGeneral from './routes/general'
import routesCustomer from './routes/customer'
import routesProvider from './routes/provider'
import routesOrg from './routes/orgranization'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routesGeneral,
    routesProvider,
    routesCustomer,
    routesOrg
  ]
})
