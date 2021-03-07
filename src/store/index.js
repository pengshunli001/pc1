import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';
import count from './modules/count'

Vue.use(Vuex);

const state = {
    userInfos: {
        createTime: "",
        createUserId: "",
        email: "",
        mobile: "",
        password: "",
        salt: "",
        status: '',
        userId: "",
        username: ""
    },
    dept: {
        cdate: "",
        cuser: "",
        dataStatus: "",
        id: "",
        level: "",
        name: "",
        orgCode: "", // 指挥处 001 法制科 002 基层基础大队003 派出所004 社区005
        parentId: "",
        udate: "",
        parentDeptName: "" // 父级名 社区需要  派出所不需要
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
    count
    }
});

export default store;
