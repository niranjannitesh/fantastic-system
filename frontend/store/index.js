import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: null
    }),
    mutations: {
      loginUser (state) {
        state.user = {
          user: user,
          type: {}
        }
      }
    }
  })
}

export default createStore
