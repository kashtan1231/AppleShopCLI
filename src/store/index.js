import { createStore } from 'vuex'
import auth from './auth'
import info from './info'

export default createStore({
  state: {
    barTopper: null,
    error: null
  },
  mutations: {
    updateTopper (state, topper) {
      state.barTopper = topper
    },
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    redirectToLink(link) {
      window.location = link
    }
  },
  modules: {
    auth, info
  },
  getters: {
    returnTopper (state) {
      return state.barTopper
    },
    
    error: s => s.error
  }
})
