import Vue from 'vue'
import store from '@/store'

// if (process.env.NODE_ENV === 'production') {
Vue.config.errorHandler = function(err, vm, info, a) {
  Vue.nextTick(() => {
    store.dispatch('ADD_ERROR_LOGS', {
      type: 'vue',
      err,
      vm,
      info,
      url: window.location.href
    })
  })
}
// }
