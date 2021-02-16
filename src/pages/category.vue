<template>
  <div class="category">
    <div class="breadcrumb">
      <el-breadcrumb separator="/" ref="breadcrumb" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品分类1111</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="box-card" ref="card">
      <el-button type="primary" style="margin: 10px" @click="addCategory"
        >添加分类</el-button
      >
      <zk-table
        ref="table"
        sum-text="sum"
        index-text="#"
        :data="elTree"
        :columns="columns"
        :selection-type="selectionType"
        :expand-type="expandType"
        :show-index="showIndex"
      >
        <template slot="likes" slot-scope="scope">
          <i
            class="el-icon-success"
            style="color: green"
            v-if="scope.row.cat_deleted == true"
          ></i>
          <i
            class="el-icon-error"
            style="color: green"
            v-if="scope.row.cat_deleted == false"
          ></i>
        </template>
        <template slot="level" slot-scope="scope">
          <el-tag type="success" v-if="scope.row.cat_level == 0" effect="dark"
            >一级</el-tag
          >
          <el-tag type="danger" v-if="scope.row.cat_level == 1" effect="dark"
            >二级</el-tag
          >
          <el-tag type="warning" v-if="scope.row.cat_level == 2" effect="dark"
            >三级</el-tag
          >
        </template>
        <template slot="opreate" slot-scope="scope">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </zk-table>
    </el-card>
    <!-- 添加分类 -->
    <el-dialog
      title="添加分类"
      :visible.sync="dialogVisible"
      @close="addCategoryClose"
      width="30%"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="ruleForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类">
          <el-cascader
            width="100%"
            v-model="selectKeys"
            :options="parentCatagoryList"
            :props="catagoryProps"
            @change="handleChange"
            expandTrigger="hover"
            clearable
            change-on-select
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitaddCatagory('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'category',
  data() {
    return {
      selectKeys: [],
      ruleForm: {
        cat_name: '',
        cat_pid: 0,
        cat_level: 0,
      },
      rules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
        ],
      },
      dialogVisible: false,
      selectionType: false,
      expandType: false,
      showIndex: true,
      parentCatagoryList: [
        {
          cat_id: 1,
          cat_name: '大家电',

          cat_pid: 0,
          cat_level: 0,
          cat_deleted: false,
          children: [
            {
              cat_id: 3,
              cat_name: '电视',
              cat_pid: 1,
              cat_level: 1,
              cat_deleted: false,
              children: [
                {
                  cat_id: 6,
                  cat_name: '曲面电视',
                  cat_pid: 2,
                  cat_level: 2,
                  cat_deleted: true,
                },
              ],
            },
          ],
        },
      ],
      catagoryProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children',
      },

      elTree: [
        {
          cat_id: 1,
          cat_name: '大家电',

          cat_pid: 0,
          cat_level: 0,
          cat_deleted: false,
          children: [
            {
              cat_id: 3,
              cat_name: '电视',
              cat_pid: 1,
              cat_level: 1,
              cat_deleted: false,
              children: [
                {
                  cat_id: 6,
                  cat_name: '曲面电视',
                  cat_pid: 2,
                  cat_level: 2,
                  cat_deleted: true,
                },
              ],
            },
          ],
        },
      ],
      columns: [
        {
          label: '分类列表',
          prop: 'cat_name',
        },
        {
          label: '是否有效',
          prop: 'cat_deleted',
          type: 'template',
          template: 'likes',
        },
        {
          label: '级别',
          prop: 'cat_level',
          type: 'template',
          template: 'level',
        },
        {
          label: '操作',
          type: 'template',
          template: 'opreate',
          width: '400px',
        },
      ],
      id:this.$route.query.id1||this.this.$route.query.id2
    }
  },
  mounted(){
    console.log('this.id',this.id)
  },
  watch:{
   '$route'(to,from){
     console.log('to',to);
     console.log('from',from);
     
     if(to.query.id==from.quersy.id){
       this.id =to.query.id;
      console.log('this.id',this.id)
     }
   }
  },
  methods: {
    addCategory() {
      this.dialogVisible = true
    },
    handleChange(value) {
      console.log('selectKeys', this.selectKeys)
      if (this.selectKeys.length > 0) {
        this.ruleForm.cat_pid = this.selectKeys[this.selectKeys.length - 1]
        this.ruleForm.cat_level = this.selectKeys.length
      } else {
        this.ruleForm.cat_pid = 0
        this.ruleForm.cat_level = 0
      }
    },
    //弹框关闭之前，重置样式
    addCategoryClose() {
      this.$refs.ruleForm.resetFields()
      this.ruleForm.cat_pid = 0
      this.ruleForm.cat_level = 0
      this.selectKeys = []
    },
    //提交父级分类列表
    submitaddCatagory(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
         return
        }
        this.dialogVisible = true
        console.log(this.ruleForm)
      })
    },
  },
}
</script>
<style lang='less' scoped>
.category {
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