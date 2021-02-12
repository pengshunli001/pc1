import router from './router/index';
import { getToken } from './utils/auth';
import { getUserInfo } from '@/api/user';
import { selectParentDeptById } from '@/api/dataTable';
import store from '@/store'

const whiteList = ['/login', '/', '/aggregateData']

// router.beforeEach( async (to, from, next) => {
//     if (getToken()) {
//         if (!store.getters.userInfos.userId) {
//             let { data } = await getUserInfo()
//             if(data){
//                 store.commit('setUserInfo', data.people)
//                 store.commit('setDept',data.dept)
//             }else{
//                 store.commit('setUserInfo', {})
//                 store.commit('setDept',{})
//             }
//             if (data && data.dept.level === 3) { // 如果社区会查询 上级派出所
//                 let parentDept = await selectParentDeptById(data.dept.parentId)
//                 store.commit('setDept', {
//                     parentDeptName: parentDept.data.name
//                 })
//             }
//         }
//         if (to.path === '/login') {
//             next({ path: '/complete' })
//         }
//         next()
//     } else {
//         if (whiteList.indexOf(to.path) !== -1) {
//             next()
//         } else {
//             next('/login')
//         }
//     }
// })
