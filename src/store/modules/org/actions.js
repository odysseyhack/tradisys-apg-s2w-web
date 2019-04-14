import * as Mutations from '@/store/modules/org/mutations-types'
import { invokeTransaction, TaskStatus } from '@/models'
import { WavesApi } from '@/api'

export default {
  acceptTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.PROGRESS })
  },
  async closeTask ({ commit, getters, rootGetters }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.CLOSED })
    const task = getters.tasks.find(t => t.name === key)
    const tx = invokeTransaction(
      task.dappAddress,
      rootGetters.user.publicKey,
      'accept',
      []
    )
    await WavesApi.signAndPublishTransaction(tx)
  }
}
