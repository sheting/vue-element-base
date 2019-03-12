import Vue from 'vue'
import App from './App.vue'
import router from '@/permission'
import Element from '@/plugins/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 把svg-icon 注册成全局的组件
import '@/icons'
import '../theme/index.css'
import '@/assets/styles/main.css'

Vue.use(Element, {
  size: 'medium'
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
