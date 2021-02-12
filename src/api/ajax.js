// 引入axios
import axios from 'axios'

import qs from 'qs'
import { Dialog } from 'vant';

import { getToken } from '@/utils/auth'
import store from '@/store'

import baseUrl from '@/config/index'

const $axios = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 30
});

$axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

$axios.interceptors.request.use(config => {
  config.headers['token'] = getToken()

  // if (method.toUpperCase() === 'POST' && data instanceof Object) {
  //   config.data = qs.stringify(data)
  // }

  // // 判断当前的接口中是否需要携带token
  // if (config.headers.needToken) {
  //   // 取出token---去store中
  //   const token = store.state.token
  //   if (!token) {
  //     // 没有token,报错
  //     const error = new Error('没有token,请重新登录')
  //     error.status = 401 // 给错误码
  //     throw error
  //   } else {
  //     // 有token,加入到请求头中
  //     config.headers['Authorization'] = token
  //   }
  // }

  return config
})

const LOGIN_OUT_CODE = 'xxxxx' // TODO

// 添加响应拦截器
$axios.interceptors.response.use(response => {
  const res = response.data
  const code = res.code
  if (code === LOGIN_OUT_CODE) {
    setTimeout(() => {
      store.dispatch('loginOut').then(() => {
        location.reload()
      })
    }, 2000)
  }
  return res
}, error => {
  Dialog({ message: '请刷新,再试' });
})
// 向外暴露
export default $axios
