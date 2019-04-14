import { WavesApi } from '@/api'
import * as Mutations from './mutations-types'

const state = {
  wavesKeeperInit: false,
  user: {
    address: null,
    publicKey: null
  }
}

const actions = {
  async authenticate ({ commit }) {
    await WavesApi.auth({ data: 'S2W App' })

    // After auth get the address:
    const { account: { address, publicKey } } = await WavesApi.publicState()

    // Set user address for future games:
    commit(Mutations.SET_USER_ADDRESS, address)
    commit(Mutations.SET_USER_PUBLICKEY, publicKey)
  },
  async setWavesKeeperInitialization ({ commit }) {
    // If Waves object initialized globally already, setup it.
    const initialized = window.Waves !== undefined
    if (initialized) {
      WavesApi.Setup()
    }
    commit(Mutations.SET_WAVES_KEEPER_INIT, initialized)
  }
}

const getters = {
  user: state => state.user,
  isAuthenticated: state => state.user.address !== null
}

const mutations = {
  [Mutations.SET_WAVES_KEEPER_INIT] (state, payload) {
    state.wavesKeeperInit = payload
  },
  [Mutations.SET_USER_ADDRESS] (state, payload) {
    state.user.address = payload
  },
  [Mutations.SET_USER_PUBLICKEY] (state, payload) {
    state.user.publicKey = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
