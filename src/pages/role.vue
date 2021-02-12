<template>
  <div class="role">
    <div class="breadcrumb">
      <el-breadcrumb separator="/" ref="breadcrumb" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="box-card" ref="card">
      <el-button style="margin: 10px" type="primary" @click="addRole"
        >添加角色</el-button
      >
      <el-table :data="dataList" border class="table" ref="table" :height="430">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              v-for="(item1, i1) in scope.row.children"
              :key="item1.id"
              :class="['dbBottom', , i1 == 0 ? 'dbTop' : '', 'vCenter']"
            >
              <el-col :span="5">
                <el-tag effect="dark" style="margin: 10px">
                  {{ item1.authName }}<i class="el-icon-caret-right"></i>
                </el-tag>
              </el-col>
              <el-col :span="19">
                <el-row
                  v-for="(item2, i2) in item1.children"
                  :class="[i2 == 0 ? '' : 'dbTop', 'vCenter']"
                  :key="item2.id"
                >
                  <el-col :span="6"
                    ><el-tag effect="dark" type="success">
                      {{ item2.authName }}<i class="el-icon-caret-right"></i>
                    </el-tag>
                  </el-col>
                  <el-col :span="13">
                    <el-tag
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      effect="dark"
                      type="warning"
                      style="margin: 10px"
                      closable
                    >
                      {{ item3.authName }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small">修改</el-button>
            <el-button type="danger" size="small">删除</el-button>
            <el-button type="warning" size="small" @click="authority(scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加角色 -->
    <el-dialog
      title="添加角色"
      :visible.sync="addRoledialogVisible"
      width="30%"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="des">
          <el-input v-model="ruleForm.des"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelRole('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="addRoleSubmit('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 分配权限 -->
    <el-dialog title="分配权限" :visible.sync="dialogVisible" width="30%">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        show-checkbox
        node-key="id"
        :default-checked-keys="defaultKeys"
        ref="tree"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="distribution">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getRoleList, getPowerList } from '../api/index'
export default {
  name: 'role',
  data() {
    return {
      dialogVisible: false,
      dataList: [],
      data: [],
      defaultProps: {
        children: 'children',
        label: 'authName',
      },
      defaultKeys: ['id'],
      addRoledialogVisible: false,
      ruleForm: {
        name: '',
        des: '',
      },
      rules: {
        name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
        des: [{ required: true, message: '请输入角色描述', trigger: 'blur' }],
      },
    }
  },
  mounted() {
    this.getRoleData()
  },
  methods: {
    getRoleData() {
      getRoleList()
        .then((res) => {
          if (res.code == 200) {
            this.dataList = res.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
     
    },
    authority(data) {
       getPowerList()
        .then((res) => {
          if (res.code == 200) {
            this.data = res.data[0].children
          }
        })
        .catch((error) => {
          console.log(error)
        })
      this.dialogVisible = true
      this.getLeadKeys(data, this.defaultKeys)
    },
    //获取三级权限
    getLeadKeys(node, arr) {
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach((item) => {
        this.getLeadKeys(item, arr)
      })
    },
    //分配权限函数
    allofRight() {},
    //确认
    distribution() {
      let keys = [
        ...this.$refs.tree.getCheckedKeys(),
        ...this.$refs.tree.getHalfCheckedKeys(),
      ]
      const idStr = keys.join(',')
      //发送给后端Str
      console.log('idStr', idStr)
      this.dialogVisible = false
    },
    handleNodeClick(data) {},
    //添加角色
    addRole() {
      this.addRoledialogVisible = true
    },
    addRoleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return
        }
        this.addRoledialogVisible = false
      })
    },
    cancelRole(formName) {
      this.$refs[formName].resetFields();
       this.addRoledialogVisible = false
    },
  },
}
</script>
<style lang='less' scoped>
.role {
  height: 100%;
  .breadcrumb {
    height: 20px;
    box-sizing: border-box;
  }
  /deep/.el-card {
    margin-top: 10px;
    margin-left: 10px;
    .table {
      height: calc(100% -20px);
      .dbTop {
        border-top: 1px solid #eee;
      }
      .dbBottom {
        border-bottom: 1px solid #eee;
      }
      .vCenter {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>