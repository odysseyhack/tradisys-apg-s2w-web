import * as Mutations from '@/store/modules/customer/mutations-types'
import { updateTasks } from '@/utils'

export default {
  [Mutations.SET_TASK_STATUS] (state, payload) {
    updateTasks(state, payload)
  }
}
