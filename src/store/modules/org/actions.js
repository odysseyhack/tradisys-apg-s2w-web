import * as Mutations from '@/store/modules/org/mutations-types'
import { TaskStatus } from '@/models'

export default {
  acceptTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.PROGRESS })
  },
  closeTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.CLOSED })
  }
}
