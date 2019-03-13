import request from '@/libs/request'

function login(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export default {
  login,
  logout
}
