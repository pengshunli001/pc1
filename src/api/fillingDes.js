import ajax from './ajax.js'

export default {
    /**
     * 行政案件详情
     */
    administrativeCaseDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/administrativeCaseDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 区居家隔离详情
     */
    areaQuarantinePersonalDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/areaQuarantinePersonalDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 管控一张网后台录入数据详情
     */
    backgroudDataDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/backgroudDataDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 合围小区详情
     */
    closureAreaDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/closureAreaDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 确诊详情
     */
    confirmedDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/confirmedDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 刑事案件详情
     */
    criminalCaseDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/criminalCaseDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 宣传单详情
     */
    flyersDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/flyersDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 居家隔离详情
     */
    homeQuarantineDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/homeQuarantineDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 硬隔离详情
     */
    isolatedDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/isolatedDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
     /**
     * 出入境详情
     */
    ImmigrationDetails(reportUnit1 = '', reportUnit2 = ''){
        return ajax.get(`epidemic/crjDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },


    /**
     * 探头建设详情
     */
    probesDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/probesDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 疫情汇总页数据
     */
    statistics(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/statistics`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
     /**
     * 疫情汇总页数据，时刻刷新
     */
    statistics1(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/statisticsByNew`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },


    /**
     * 疫情汇总页数据
     */
    suspectedCasesDesc(reportUnit1 = '', reportUnit2 = '') {
        return ajax.get(`epidemic/suspectedCasesDesc`, {
            params: {
                reportUnit1,
                reportUnit2
            }
        })
    },
    /**
     * 提交疫情数据
     */
    submit(data) {
        return ajax.post(`epidemic/submit`, data)
    },
    statisticsAll() {
        return ajax.get(`epidemic/statisticsAll`)
    },
    /**
     * 比较昨天数据
     */
    statisticsYesterday() {
        return ajax.get(`epidemic/statisticsYesterday`)
    },
    /**
     * 图标数据
     */
    thermodynamicChart() {
        return ajax.get(`epidemic/thermodynamicChart`)
    }
}