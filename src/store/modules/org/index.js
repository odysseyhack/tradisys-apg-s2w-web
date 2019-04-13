import { BackendApi } from '@/api'
import { TaskStatus } from '@/models'
import * as Mutations from './mutations-types'

const state = {
  tasksOpen: [],
  tasksProgress: [],
  tasksCompleted: [],
  tasksRejected: []
}

const actions = {
  async fetchTasks ({ commit }) {
    try {
      const tasks = await BackendApi.Org.getTasks()
      const open = []
      const progress = []
      const completed = []
      const rejected = []

      for (const task of tasks) {
        if (task.status === TaskStatus.OPEN) {
          open.push(task)
          continue
        }
        if (task.status === TaskStatus.PROGRESS) {
          progress.push(task)
          continue
        }
        if (task.status === TaskStatus.COMPLETED) {
          completed.push(task)
          continue
        }
        if (task.status === TaskStatus.REJECTED) {
          rejected.push(task)
        }
      }

      commit(Mutations.SET_TASKS_OPEN, open)
      commit(Mutations.SET_TASKS_PROGRESS, progress)
      commit(Mutations.SET_TASKS_REJECTED, rejected)
      commit(Mutations.SET_TASKS_COMPLETED, completed)
    } catch (e) {
      console.error(e)
    }
  }
}

const getters = {
  tasksOpen: state => state.tasksOpen,
  tasksProgress: state => state.tasksProgress,
  tasksCompleted: state => state.tasksCompleted,
  tasksRejected: state => state.tasksRejected
}

const mutations = {
  [Mutations.SET_TASKS_OPEN] (state, payload) {
    state.tasksOpen = payload
  },
  [Mutations.SET_TASKS_PROGRESS] (state, payload) {
    state.tasksProgress = payload
  },
  [Mutations.SET_TASKS_COMPLETED] (state, payload) {
    state.tasksCompleted = payload
  },
  [Mutations.SET_TASKS_REJECTED] (state, payload) {
    state.tasksRejected = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
