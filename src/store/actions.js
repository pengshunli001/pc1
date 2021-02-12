import { setToken, removeToken } from '@/utils/auth'
import { userLogin } from '@/api/user'

export const loginOut = function ({ commit }) {
  return new Promise(resolve => {
      removeToken()
      commit('setUserInfo', {})
      resolve()
  })
};

export const login = function ({ commit }, userInfo) {
  return new Promise((resolve, reject) => {
    userLogin(userInfo).then(response => {
      const { res, user } = response.data
      commit('setUserInfo', user)
      setToken(res.token)
      resolve()
    }).catch(err => {
      reject(err)
    })
  })
}