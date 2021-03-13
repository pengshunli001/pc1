import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let routes = [
    {
        path: '/login',
        name: 'Login',
        component: resolve => require(['../modules/login.vue'], resolve)
      
    },
    {
        path: '/home',
        name: 'home',
        component: resolve => require(['../modules/home.vue'], resolve),
        children: [
            //用户列表
            {
                path: '/user',
                component: resolve => require(['../pages/user.vue'], resolve),
            },
            //权限列表
            {
                path: '/rights',
                component: resolve => require(['../pages/rights.vue'], resolve),
            },
            //角色列表
            {
                path: '/role',
                component: resolve => require(['../pages/role.vue'], resolve),
            },
             //商品列表
             {
                path: '/goods',
                component: resolve => require(['../pages/goods.vue'], resolve),
            },
            //单品列表
            {
                path: '/list',
                component: resolve => require(['../pages/list.vue'], resolve),
            },
            //商品分类
            {
                path: '/category',
                component: resolve => require(['../pages/category.vue'], resolve),
            },
           
        ],
        meta: {
            keepAlive: true,
            deepth: 0.1
        }
    },
    {
        path: '/',
        redirect: '/home',

    },


];
routes = routes
    .concat([
    //     {  //通配符路由,放在最后面
    //     path: '*',
    //     redirect: '/category' //等会是空的
    // }
]);

export default new VueRouter({
    //mode:'history',
    routes
});
