import ajax from './ajax.js'
import baseUrl from '@/config/index'

export function userLogin(userInfo) {
    return ajax.post(`sys/login`, userInfo)
}

export function getCaptchaUrl(uuid) {
    return `${baseUrl}captcha.jpg?uuid=${uuid}`
}
//获取滚动条信息
export function getScrollInfoUrl() {
    return ajax.get(`${baseUrl}futian/sendMsg/getTips`)
}
//发送验证码
export function getSendMessageUrl(phone) {
    return ajax.get(`${baseUrl}futian/sendMsg/sendSMS?phone=${phone}`)
}
//校验验证码
export function getSendCheckCodeUrl({phone,code}) {
    return ajax.get(`${baseUrl}futian/sendMsg/checkCode?phone=${phone}&code=${code}`)
}
//输入新密码
export function getFindPasswordUrl(data) {
    return ajax.post(`${baseUrl}futian/sendMsg/findPassword`,data)
}



/**
 * password
 * newPassword
 * @param {*} password 
 */
export function changePassword(password) {
    return ajax.post(`sys/user/password`, password)
}

export function getUserInfo() {
    return ajax.get(`sys/user/peopelInfo?t${new Date().getTime()}`)
}

/**
 * 判断用户是否需要初始化密码
 */
export function passwordInit() {
    return ajax.get(`/sys/user/passwordInit`)
}
