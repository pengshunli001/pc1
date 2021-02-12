<template>
  <div class="rights">
    <div class="breadcrumb">
      <el-breadcrumb separator="/" ref="breadcrumb" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>权限列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 权限列表 -->
    <el-card class="box-card" ref="card">
      <el-table
        @cell-click="clickOne"
        :data="tableData"
        style="width: 100%"
        :border="true"
      >
        <el-table-column prop="authority" label="权限名称"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column prop="level" label="权限等级">
          <template slot-scope="scope">
            <div style="display: flex; justify-content: space-around">
              <el-tag v-if="scope.row.level == '一级'" effect="dark"
                >{{scope.row.level}}</el-tag
              >
              <el-tag
                v-if="scope.row.level == '二级'"
                type="success"
                effect="dark"
                >{{scope.row.level}}</el-tag
              >
              <el-tag
                v-if="scope.row.level == '三级'"
                type="warning"
                effect="dark"
                >{{scope.row.level}}</el-tag
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>item
<script>
export default {
  name: 'rights',
  data() {
    return {
      tableData: [
        {
          authority: '商品管理',
          path: '/rights',
          level: '一级',
        },
        {
          authority: '订单管理',
          path: '王小虎',
          level: '二级',
        },
        {
          authority: '权限管理',
          path: '王小虎',
          level: '三级',
        },
        {
          authority: '商品列表',
          path: '王小虎',
          level: '三级',
        },
      ],
    }
  },
  methods: {
    clickOne() {
      console.log(arguments)
    },
  },
  mounted() {},
}
</script>
<style lang='less' scoped>
.rights {
  height: 100%;
  /deep/.el-card {
    margin-top: 10px;
    margin-left: 10px;
    .table {
      height: calc(100% -20px);
    }
  }
}
</style>