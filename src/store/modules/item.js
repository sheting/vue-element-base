import itemApi from '@/api/item'

const def = () => {
  return {
    statics: []
  }
}

export default {
  state: def(),
  mutations: {
    SET_STATICS (state, res) {
      state.statics = res || []
    }
  },
  actions: {
    GET_STATICS ({state, commit, dispatch}, params) {
      return new Promise((resolve, reject) => {
        const payload = params
        itemApi.getStatic(payload)
          .then(res => {
            commit('SET_STATICS', res)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    GET_STATICS (state) {
      return state.statics
    }
  }
}
