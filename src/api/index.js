import $axios from '../common/js/httpCommon.js';
//接口
let reportIp = 'http://localhost:8090'; //测试环境
let ocrIp = 'http://192.168.137.239:8090';

export function  uploadPictures (params) {
  return $axios.post(`${ocrIp}/imageUrl/add`, params);
}





