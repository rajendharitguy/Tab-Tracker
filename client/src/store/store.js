import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const createStore = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  // getters: {
  //   token (state) {
  //     return state.token
  //   },
  //   chechAuth (state) {
  //     return state.chechAuth
  //   }
  // },
  mutations: {
    setToken (state, token) {
      Object.assign(state, { token })
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})

export default createStore
