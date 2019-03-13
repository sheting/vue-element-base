import axios from 'axios'
import { MessageBox } from 'element-ui'
import store from '@/store'

const api = process.env.VUE_APP_API

let logoutMessage = () => {
  MessageBox.confirm('你已被登出，可以点击取消并继续留在本页面，或者重新登录！', '提示', {
    confirmButtonText: '重新登录',
    cancelButtonText: '取消',
    type: 'warning',
    closeOnClickModal: false
  })
  .then(() => {
    sessionStorage.removeItem('isLogin')
    sessionStorage.removeItem('username')
    store.dispatch('LOGOUT')
      .then(() => {
        store.dispatch('SET_USER_INFO')
        location.pathname = '/login'
        // location.reload() // 为了重新实例化vue-router对象 避免bug
      })
      .catch(error => {
        store.dispatch('SET_USER_INFO')
        location.pathname = '/login'
        // location.reload()
      })
  })
  .catch(() => {})
}
// create an axios instance
const service = axios.create({
  baseURL: api, // api 的 base_url
  timeout: 60000, // request timeout
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data
  }],
  validateStatus: function (status) {
    // 没有权限
    if (status === 401) {
      logoutMessage()
      return false
    }
    // return true, 调用 resolve, 然后链式调用then;
    // return false, 调用 reject, 然后链式调用catch
    return status >= 200 && status < 300
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    let {message, code, data} = JSON.parse(response.data)
    if (code >= 200 && code < 300) {
      return data
    } else {
      // 没有权限
      if (code === 401) {
        logoutMessage()
      }
      return Promise.reject({
        message: message || `操作失败`,
        code: code
      })
    }
  },
  error => {
    // 判断请求异常信息中是否含有超时timeout字符串
    if(error.message && error.message.includes('timeout')){
      return Promise.reject({
        message: `请求超时`
      })
    }
    return Promise.reject({
      message: `请求失败`
    })
  }
)

export default service
