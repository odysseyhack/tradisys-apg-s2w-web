import { TaskStatus } from '@/models'

const state = {
  tasks: [
    {
      name: 'task 1',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN
    },
    {
      name: 'task 2',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN
    },
    {
      name: 'task 3',
      description: 'description',
      thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN
    }
  ]
}

const actions = {}

const getters = {
  tasks: state => state.tasks,
  tasksOpen: state => state.tasks.filter(t => t.status === TaskStatus.OPEN),
  tasksCompleted: state => state.tasks.filter(t => t.status === TaskStatus.COMPLETED),
  tasksRejected: state => state.tasks.filter(t => t.status === TaskStatus.REJECTED),
  tasksProgress: state => state.tasks.filter(t => t.status === TaskStatus.PROGRESS)
}

const mutations = {}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
