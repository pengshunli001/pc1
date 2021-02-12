<template>
  <div class="userWrap">
    <button type="danger" @click="gotoCatary">跳转</button>
    <!-- <TabNav @active="active"></TabNav> -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/" ref="breadcrumb" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="box-card" ref="card">
      <div slot="header" class="clearfix">
        <div style="margin-top: 15px; width: 50%; display: flex">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-button style="margin-left: 10px" type="primary" @click="addUser"
            >添加用户</el-button
          >
        </div>
      </div>
      <el-table :data="dataList" border class="table" ref="table" :height="430">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="editClick(scope.row)" type="primary" size="small"
              >修改</el-button
            >
            <el-button type="danger" @click="cancel(scope.row)" size="small"
              >删除</el-button
            >
            <el-button type="info" size="small" @click="assignRoles(scope.row)"
              >分配角色</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total"
      ></el-pagination>
    </el-card>
    <!-- 添加用户弹框 -->
    <el-dialog title="添加新用户" :visible.sync="UserDialogVisible" width="30%">
      <el-form
        :model="ruleForm"
        :rules="editRules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelUser('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户 -->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="30%">
      <el-form
        :model="editForm"
        :rules="rules"
        ref="editForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="editForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="editForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editCancel('editForm')">取 消</el-button>
        <el-button type="primary" @click="editSubmit('editForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 分配角色 -->
    <el-dialog
      title="分配角色"
      :visible.sync="assignRoledialogVisible"
      width="30%"
    >
      <el-form
        :model="assignRoleForm"
        :rules="assignRoleRules"
        ref="assignRoleRules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <p style="line-height: 30px">当前用户：{{ userInfo.username }}</p>
        <p style="line-height: 30px">当前角色：{{ userInfo.username }}</p>
        <div>
          <span>分配的新角色：</span>
          <el-select v-model="assignRoleForm.name" placeholder="请选择">
            <el-option
              v-for="item in roleList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              {{ roleList }}
            </el-option>
          </el-select>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelRole('assignRoleForm')">取 消</el-button>
        <el-button type="primary" @click="assignRoleSubmit('assignRoleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import tableTest from '../components/table/tableTest'
import TabNav from '../components/tabNav'
import {
  getUserDataList,
  getUserDel,
  addUser,
  upUserDataOne,
  assignRole,
} from '../api/index'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      var regPass = /^[A-Za-z0-9_]{8,16}$/
      if (regPass.test(value)) {
        callback()
      }
      callback(new Error('密码字符为8-13位，可用英文、数字、下划线组成！'))
    }
    var validatePhone = (rule, value, callback) => {
      var regPhone = /[1]\d{10}/
      if (regPhone.test(value)) {
        callback()
      }
      callback(new Error('手机号必须为数字并且11位'))
    }
    var validateEmail = (rule, value, callback) => {
      var regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (regEmail.test(value)) {
        callback()
      }
      callback(new Error('邮箱格式不正确'))
    }
    return {
      assignRoleForm: {
        name: '',
      },
      rules: {
        name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
      },

      ruleForm: {
        username: '',
        password: '',
        email: '',
        phone: '',
      },
      assignRoleRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { validator: validatePass, trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' },
        ],
      },
      UserDialogVisible: false,
      editDialogVisible: false,
      editForm: {
        username: '',
        password: '',
        email: '',
        phone: '',
      },
      editRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { validator: validatePass, trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' },
        ],
      },

      tabType: 1,
      input3: '',
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
      assignRoledialogVisible: false,
      userInfo: {},
      roleList: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      roleValue: '',
    }
  },
  mounted() {
    // let header = document.querySelector('.el-header').offsetHeight
    // let table = document.querySelector('.table')
    // this.$refs['table'].height = window.innerHeight - header + 'px'
    this.getUserList()
  },
  components: {
    tableTest,
    TabNav,
  },
  methods: {
    gotoCatary() {
      this.$router.replace({ path: '/category', query: { id: 1 } })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getUserList()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getUserList()
    },
    cancel(data) {
      console.log(data.id)
      this.id = data.id
      this.getUserDel1()
    },
    getUserList() {
      getUserDataList({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      })
        .then((res) => {
          if (res.code == 200) {
            this.dataList = res.dataList
            console.log('this.dataList', this.dataList)
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
      this.getUserList()
    },
    getUserDel1() {
      this.$confirm('确认删除吗？')
        .then(() => {
          getUserDel(this.id)
            .then((res) => {
              if (res.code == 200) {
                this.getUserList()
              }
            })
            .catch((error) => {
              throw error
            })
        })
        .catch((_) => {})
    },
    //新增用户
    addUser() {
      this.UserDialogVisible = true
    },
    cancelUser(formName) {
      this.$refs[formName].resetFields()
      this.UserDialogVisible = false
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return
        addUser(this.ruleForm)
          .then((res) => {
            if (res.code == 200) {
              this.$message({
                message: '添加用户成功了',
                type: 'success',
              })
              this.getUserList()
            }
          })
          .catch((error) => {})
        this.UserDialogVisible = false
      })
    },
    //修改
    editClick(data) {
      this.editForm = data
      this.editDialogVisible = true
    },
    editCancel(formName) {
      this.$refs[formName].resetFields()
      this.editDialogVisible = false
    },
    editSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return
        upUserDataOne(this.editForm)
          .then((res) => {
            if (res.code == 200) {
              this.$message({
                message: '修改用户成功了',
                type: 'success',
              })
              this.getUserList()
            }
          })
          .catch()
        this.editDialogVisible = false
      })
    },
    //分配角色
    assignRoles(data) {
      this.assignRoledialogVisible = true
      this.userInfo = data
      assignRole().then(
        (res) => {
          this.roleList = res.data
        },
        (error) => {
          throw Error()
        }
      )
      console.log('assdata', data)
    },
    assignRoleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return
        }
        this.assignRoledialogVisible = false
      })
    },
    cancelRole(formName) {
      this.$refs[formName].resetFields()
      this.assignRoledialogVisible = false
    },
  },
}
</script>
<style lang='less' scoped>
.userWrap {
  height: 100%;
  .breadcrumb {
    height: 20px;
    box-sizing: border-box;
  }
  /deep/.el-card {
    margin-top: 10px;
    margin-left: 10px;
    .el-card__header {
    }
    .table {
      height: calc(100% -20px);
    }
  }
}
</style>