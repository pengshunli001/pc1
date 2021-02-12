// import Vue from 'vue';

export default {
    setUserInfo(state, value) {  // 保存用户信息
        state.userInfos = Object.assign(state.userInfos, value);
    },
    setDept(state, value){
        state.dept = Object.assign(state.dept, value);
    },
    clearUserInfo(state) {
        state.userInfos = {
            createTime: "",
            createUserId: "",
            email: "",
            mobile: "",
            password: "",
            salt: "",
            status: '',
            userId: "",
            username: ""
        }
    }
};