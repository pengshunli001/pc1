import './common/css/common.less';

import Vue from 'vue';
import './permission';
import router from './router';
import store from './store';
import './vant-ui'
import './assets/css/global.css'
//API
import api from './api/';
Vue.prototype.$api = api;

Vue.config.productionTip = false;
import App from './App.vue';
//树形表格
import ZkTable from 'vue-table-with-tree-grid'
 
Vue.component(ZkTable.name, ZkTable)
//注册公共组件
// import Header from './components/header.vue'
// Vue.component(Header.name, Header)

// 表单验证组件
import { ValidationProvider, ValidationObserver } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// 引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
