import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  tasks: JSON.parse(localStorage.getItem('tasks'))
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
