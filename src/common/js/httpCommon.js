import axios from 'axios'; // 引入axios
import router from '../../router';
import Vue from 'vue';
import {Toast } from 'vant';
Vue.use(Toast);

const $axios = axios.create({
    baseURL: process.env.VUE_APP_URL,
     timeout: 1000 * 30,
     headers: {
         post: {
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/json;charset=UTF-8',
            // 'X-Requested-With': 'XMLHttpRequest'
         }
     }
});

// 请求拦截器
$axios.interceptors.request.use(
    config => {
        //每次请求发送token
        const token = localStorage.getItem('nyToken');//store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
});
// 响应拦截器
$axios.interceptors.response.use(
    response => {
        //接口请求成功
        if (response.headers && response.headers.refreshtoken){
            localStorage.setItem("nyToken", response.headers.refreshtoken);
            console.log(localStorage.getItem('nyToken'))
        }
        if (response.status === 200) {
            console.log(response.status);
            if (response.data.subCode && response.data.subCode !== 0){  //后台返回文件流时，无subcode
                // console.log(response.data.subMessage);
            }else if(response.data.code === 200) {
                return Promise.resolve(response.data);
            } else {
                return Promise.resolve(response);
            }
        }

        return Promise.reject(response);
    },
    //接口请求失败的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    // router.replace({
                    //     path: '/login',
                    //     query: {
                    //         redirect: router.history.current.fullPath
                    //     }
                    // });
                    Toast('请求错误');
                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 跳转登录页面
                case 403:
                    Toast('请求错误');
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.history.current.fullPath
                            }
                        });
                    }, 1000);
                    break;
                // 404请求不存在
                case 404:
                    Toast('网络请求不存在');
                    break;
                default:
                    Toast('网络或服务器错误！');
            }
            return Promise.reject(error.response);
        }
    }
);

export default $axios;