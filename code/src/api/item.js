import request from '@/libs/request'

function getStatic (params) {
  return request({
    url: '/statics',
    method: 'get',
    params
  })
}

export default {
  getStatic
}
