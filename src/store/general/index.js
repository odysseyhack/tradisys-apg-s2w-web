import { WavesApi } from '@/api'
import * as Mutations from './mutations-types'

const state = {
  wavesKeeperInit: false
}

const actions = {
  async setWavesKeeperInitialization ({ commit }) {
    // If Waves object initialized globally already, setup it.
    const initialized = window.Waves !== undefined
    if (initialized) {
      WavesApi.Setup()
    }
    commit(Mutations.SET_WAVES_KEEPER_INIT, initialized)
  }
}

const getters = {}

const mutations = {
  [Mutations.SET_WAVES_KEEPER_INIT] (state, payload) {
    state.wavesKeeperInit = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
