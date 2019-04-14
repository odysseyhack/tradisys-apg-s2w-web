import { TaskStatus } from '@/models'
import * as Mutations from './mutations-types'

const state = {
  tasks: [
    {
      name: 'Vacancy Volunteers wanted for between-hours-care (BHC)',
      description: 'Supervising (in total) some 150 children during recess hours.',
      thumbnail: 'https://volunteerthehague.nl/images/thumbs/__lw440h440d1/__cw440h440/__ql60//var/mediamanager/files/vacancy_photo/1471914380740(2).jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN
    },
    {
      name: 'Nurse / caregiver individual health care',
      description: 'Stichting ThuisPoli is looking for a socially committed nurse / caregiver individual health care to assist us in providing care and maintaining a good standard of practical vocational training.',
      thumbnail: 'https://www.nursingworld.org/~4aeb87/globalassets/practiceandpolicy/workforce/staff.jpg ',
      organization: 'organisation',
      status: TaskStatus.OPEN
    },
    {
      name: 'Production manager live performances ',
      description: 'Production manager for: live performances, rehearsals, video and photo recordings, sale of merchandise.',
      thumbnail: 'https://ccskills.org.uk/images/cache/images/cache/remote/https_s3.amazonaws.com/music.images/71125c2f744ef7df8ee833bcca325007/2776-production-manager_600_300_80_s_c1.jpg',
      organization: 'organisation',
      status: TaskStatus.OPEN
    }
  ]
}

const actions = {
  acceptTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.PROGRESS })
  },
  completeTask ({ commit }, key) {
    commit(Mutations.SET_TASK_STATUS, { key, status: TaskStatus.COMPLETED })
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
