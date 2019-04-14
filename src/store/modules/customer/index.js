import { TaskStatus, invokeTransaction } from '@/models'
import { WavesApi } from '@/api'
import * as Mutations from './mutations-types'

const state = {
  tasks: JSON.parse(localStorage.getItem('tasks'))
}

const actions = {
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

const getters = {
  tasks: state => state.tasks,
  tasksOpen: state => state.tasks.filter(t => t.status === TaskStatus.OPEN),
  tasksCompleted: state => state.tasks.filter(t => t.status === TaskStatus.COMPLETED),
  tasksRejected: state => state.tasks.filter(t => t.status === TaskStatus.REJECTED),
  tasksProgress: state => state.tasks.filter(t => t.status === TaskStatus.PROGRESS)
}

const mutations = {
  [Mutations.SET_TASK_STATUS] (state, payload) {
    const { key, status } = payload
    const index = state.tasks.findIndex(t => t.name === key)
    if (index > -1) {
      state.tasks[index].status = status
    }
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
