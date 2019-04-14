import * as Mutations from '@/store/modules/customer/mutations-types'
import { invokeTransaction, TaskStatus } from '@/models'
import { WavesApi } from '@/api'

export default {
  acceptTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.PROGRESS })
  },
  async completeTask ({ commit, rootGetters }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.COMPLETED })
    const tx = invokeTransaction(
      '3MyzVARAk4HYmETR5AkHeHLMeCiueRTkEbQ',
      rootGetters.user.publicKey,
      'deposit',
      []
    )
    console.log(tx)
    const stx = await WavesApi.signAndPublishTransaction(tx)
    console.log(stx)
  }
}
