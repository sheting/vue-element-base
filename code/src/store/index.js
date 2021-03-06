import Vue from 'vue'
import Vuex from 'vuex'

import account from './modules/account'
import errorLog from './modules/error-log'
import item from './modules/item'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
    errorLog,
    item
  }
})
