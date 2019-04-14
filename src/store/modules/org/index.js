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
  acceptTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.PROGRESS })
  },
  deleteTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.DELETED })
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
