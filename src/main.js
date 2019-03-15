import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/permission'
import Element from '@/plugins/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/icons'
import '../theme/index.css'
import '@/assets/styles/main.css'
import i18n from '@/lang'

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
