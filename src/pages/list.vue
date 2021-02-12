<template>
  <div class="userWrap">
    <!-- <TabNav @active="active"></TabNav> -->
    <el-breadcrumb separator="/" ref="breadcrumb" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card" ref="card">
      <div slot="header" class="clearfix">
        <div style="margin-top: 15px;width:50%">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>

      <tableTest
        :col="thead"
        :data="dataList"
        :select="select"
        class="table"
        ref="table"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handleCurrentChange1="handleCurrentChange1"
      >
        <template v-slot:optation="slotData">
          <div style="display:flex">
            <el-button type="success">修改</el-button>
            <el-button type="danger" @click="cancel(slotData.data)">删除</el-button>
            <el-button type="primary">分配权限</el-button>
          </div>
        </template>
      </tableTest>
    </el-card>
  </div>
</template>
<script>
import tableTest from '../components/table/tableTest'
import TabNav from '../components/tabNav'
import { getDataList, getUserDel } from '../api/index'
export default {
  name:'list',
  data() {
    return {
      tabType: 1,
      input3: '',
      thead: [
        {
          label: '日期',
          prop: 'data',
        },
        {
          label: '类型',
          prop: 'type',
          type: 'function',
          callback: (row, prop) => {
            //将prop字段传出来
            const data = this.parking.filter((item) => {
              return item.value == row[prop]
            })
            if (data && data.length > 0) {
              return data[0].label
            }
          },
        },
        {
          label: '地址',
          prop: 'address',
          type: 'function',
          callback: (row, prop) => {
            //换行
            const address = row[prop]
            let addressInfo = ''
            if (address) {
              let split = address.split(',')
              addressInfo += split[0]
              if (split[1]) {
                addressInfo += `<br/>${split[1]}`
              }
            }
            return addressInfo
          },
        },
        {
          label: '开关',
          prop: 'switch',
          type: 'switch',
          isShow: true,
        },
        {
          label: '操作',
          prop: 'oprataion',
          type: 'slot',
          name: 'optation',
        },
      ],
      select: true,
      dataList: [],
      id: '',
      parking: [
        {
          label: '室内',
          value: 1,
        },
        { label: '室外', value: 2 },
      ],
      tableHeight: 0,
      currentPage: 1,
      pageSize: 10,
      total: 0,
    }
  },
  mounted() {
    const header = document.querySelector('.el-header').offsetHeight
    this.$refs['table'].height = window.innerHeight - header + 'px'
    this.getDataList1()
  },
  components: {
    tableTest,
    TabNav,
  },
  methods: {
    cancel(data) {
      console.log(data.id)
      this.id = data.id
      this.getUserDel1()
    },
    // active(index) {
    //   switch (index) {
    //     case 0:
    //       this.tabType = 0
    //       break
    //     case 1:
    //       this.tabType = 1
    //       break
    //   }
    // },
    getDataList1() {
      getDataList({ currentPage: this.currentPage, pageSize: this.pageSize })
        .then((res) => {
          if (res.code == 200) {
            this.dataList = res.dataList
            this.total = res.tallist
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleCurrentChange1(val) {
      this.currentPage = val
      this.dataList = []
      this.getDataList1()
    },
    getUserDel1() {
      console.log(this.id)
      this.$confirm('确认删除吗？')
        .then(() => {
          getUserDel(this.id)
            .then((res) => {
              if (res.code == 200) {
                this.getDataList1()
              }
            })
            .catch((error) => {
              throw error
            })
        })
        .catch((_) => {})
    },
  },
}
</script>
<style lang='less' scoped>
.userWrap {
  .table {
    height: 0;
  }
  /deep/.el-card {
    height: calc(100vh - 138px);
    margin-top: 20px;
    margin-left: 10px;
  }
}
</style>