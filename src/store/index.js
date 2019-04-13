import { Vuex } from '@/modules'

// ###########################
// #  App store modules
// ###########################
import general from './general'
import modCustomer from './modules/customer'
import modProvider from './modules/provider'
import modOrg from './modules/org'

export default new Vuex.Store({
  ...general,
  modules: {
    customer: modCustomer,
    provider: modProvider,
    org: modOrg
  }
})
