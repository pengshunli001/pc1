import ajax from './ajax.js'

export function submitData(data) {
    return ajax.post(`epidemic/submit`, data)
}



export function getList(param){
    return ajax.get('atpapp/getList',
        {params:param}
    )
}
/**
 * 查询下拉列表
 */
export function queryForPCS() {
    return ajax.get(`futian/sendMsg/queryForPCS`)
}

/**
 * 根据父级Id查询子部门
 */
export function selectDeptByParentId(parentId) {
    return ajax.get(`sys/dept/selectDeptByParentId`, {
        params: {
            parentId
        }
    })
}

// 根据Id查询父级部门
export function selectParentDeptById(deptId) {
    return ajax.get(`sys/dept/selectParentDeptById`, {
        params: {
            deptId
        }
    })
}

// 保存汇总数据
export function saveAggregateData(form) {
    // return ajax.get(`sys/dept/selectParentDeptById`, {
    //     params: {
    //         deptId
    //     }
    // })
}
//指挥处提交汇总数据
export function saveAggregateDataUrl2(data) {
    return ajax.post(`/epidemic/areaInfoAdd`, data)
}
