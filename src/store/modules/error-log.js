const errorLog = {
  state: {
    logs: []
  },
  mutations: {
    ADD_ERROR_LOGS: (state, log) => {
      state.logs.push(log)
    }
  },
  actions: {
    ADD_ERROR_LOGS({ commit }, log) {
      commit('ADD_ERROR_LOGS', log)
    }
  },
  getters: {
    GET_ERROR_LOGS: state => state.logs
  }
}

export default errorLog
  