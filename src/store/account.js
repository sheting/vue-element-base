import accountApi from '@/api/account'

const def = () => {
  return {
    userInfo: {},
    userAuth: false
  }
}

export default {
  state: def(),
  mutations: {
    USER_INFO (state, res) {
      state.userInfo = res || {}
    },
    USER_AUTH (state, res) {
      state.userAuth = res || false
    }
  },
  actions: {
    LOGIN ({state, commit, dispatch}, params) {
      return new Promise((resolve, reject) => {
        const payload = params
        accountApi.login(payload)
          .then(() => {
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    LOGOUT ({state, commit, dispatch}, params) {
      return new Promise((resolve, reject) => {
        const payload = params
        accountApi.logout(payload)
          .then(() => {
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    SET_USER_INFO ({state, commit, dispatch}) {
      if (sessionStorage.getItem('isLogin')) {
        commit('USER_INFO', {username: sessionStorage.getItem('username')})
        commit('USER_AUTH', true)
      } else {
        commit('USER_INFO', null)
        commit('USER_AUTH', false)
      }
    }
  },
  getters: {
    USER_INFO_DETAIL (state) {
      return state.userInfo
    },
    USER_AUTH (state) {
      return state.userAuth
    }
  }
}
