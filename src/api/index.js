import $axios from '../common/js/httpCommon.js';
//上报病情
let reportIp = 'http://localhost:8090'; //测试环境
//let reportIp = 'http://121.12.87.65:8778';


export function sendForm (params) {
  return $axios.post(`${ocrIp}/epidemic/submit`, params);
}
export function getDataList (param) {
  return $axios.get(`${reportIp}/getDataList`,
    { params: param }
  )
}
export function getUserDel (id) {
  return $axios.post(`${reportIp}/delUserDataOne`,
    { id: id }
  )
}
export function getUserDataList (param) {
  return $axios.get(`${reportIp}/getUserDataList`,
    { params: param }
  )
}
//新增用户列表
export function addUser (param) {
  return $axios.post(`${reportIp}/addUser`,
    param 
  )
}

//修改用户详情
export function upUserDataOne (param) {
  return $axios.post(`${reportIp}/upUserDataOne`,
    param 
  )
}
//获取分配角色的数据
export function assignRole(){
  return $axios.get(`${reportIp}/assignRole`,
)
}
//获取角色列表
export function getRoleList(){
  return $axios.get(`${reportIp}/getRoleList`,
  
  )
}

//获取权限列表
export function getPowerList(){
  return $axios.get(`${reportIp}/getPowerList`,
  
  )
}


