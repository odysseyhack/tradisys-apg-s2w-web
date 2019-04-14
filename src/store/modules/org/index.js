import { TaskStatus } from '@/models'
import * as Mutations from './mutations-types'

const state = {
  tasks: JSON.parse(localStorage.getItem('tasks'))
}

const actions = {
  acceptTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.PROGRESS })
  },
  closeTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.CLOSED })
  }
}

const getters = {
  tasks: state => state.tasks,
  tasksOpen: state => state.tasks.filter(t => t.status === TaskStatus.OPEN),
  tasksCompleted: state => state.tasks.filter(t => t.status === TaskStatus.COMPLETED),
  tasksRejected: state => state.tasks.filter(t => t.status === TaskStatus.REJECTED),
  tasksProgress: state => state.tasks.filter(t => t.status === TaskStatus.PROGRESS),
  tasksClosed: state => state.tasks.filter(t => t.status === TaskStatus.CLOSED)
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
