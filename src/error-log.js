import Vue from 'vue'
import store from '@/store'

// if (process.env.NODE_ENV === 'production') {
Vue.config.errorHandler = function(err, vm, info, a) {
  console.error('error log-------')
  Vue.nextTick(() => {
    store.dispatch('ADD_ERROR_LOGS', {
      err,
      vm,
      info,
      url: window.location.href
    })
    console.error('error log-------', err, info)
  })
}
// }
