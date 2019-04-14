import { BackendApi } from '@/api'
import { TaskStatus } from '@/models'
import * as Mutations from './mutations-types'

const state = {
  tasks: [
    {
      name: 'task 1',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN,
      notice: ''
    },
    {
      name: 'task 2',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN,
      notice: ''
    },
    {
      name: 'task 3',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN,
      notice: ''
    },
    {
      name: 'task 4',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.COMPLETED,
      notice: 'Amazing'
    },
    {
      name: 'task 5',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.CLOSED,
      notice: 'Amazing'
    },
    {
      name: 'task 6',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.CLOSED,
      notice: 'Amazing'
    },
    {
      name: 'task 7',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.REJECTED,
      notice: 'Amazing'
    },
    {
      name: 'task 8',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.PROGRESS,
      notice: 'Amazing'
    }
  ]
}

const actions = {
  async fetchAllTasks ({ commit }) {
    try {
      const tasks = await BackendApi.Org.getAllTasks()
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
  },
  async fetchTasksByOrgId ({ commit }, id) {
    try {
      const tasks = await BackendApi.Org.getTasksByOrgId(id)
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
  tasks: state => state.tasks,
  tasksOpen: state => state.tasks.filter(t => t.status === TaskStatus.OPEN),
  tasksCompleted: state => state.tasks.filter(t => t.status === TaskStatus.COMPLETED),
  tasksRejected: state => state.tasks.filter(t => t.status === TaskStatus.REJECTED),
  tasksProgress: state => state.tasks.filter(t => t.status === TaskStatus.PROGRESS),
  tasksClosed: state => state.tasks.filter(t => t.status === TaskStatus.CLOSED)
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
