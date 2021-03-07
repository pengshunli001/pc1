<template>
  <div>
    <el-dialog title="提示" :visible.sync="addDialogVisible" width="30%">
    
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动名称">
          <TreeDialog />
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="提交人" prop="resource">
          <el-input v-model="ruleForm.resource"></el-input>
        </el-form-item>
        <el-form-item
          label="重要信息"
          prop="region"
          v-if="currentLevel==3"
        >
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option
              v-for="(item, index) in product3"
              :key="index"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="说明" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import TreeDialog from '../../components/dialog/tranfers/treeDialog'
export default {
  data() {
    return {
      defaultProps: {
        label: 'label',
        children: 'children',
        value: 'label',
      },
      dialogValue: [],
      addDialogVisible: false,
      product2: [],
      product3: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        },
      ],
      product4: [],
      ruleForm: {
        treeValue: '',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' },
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      },
    }
  },
  components: {
    TreeDialog,
  },
  computed: {
    ...mapState('count', ['currentTreeData','currentLevel','editCurrentTreeData']),
  },
  mounted() {
    if(this.currentLevel  !=3){
      this.rules.region =undefined
      }
  },

  methods: {
    ...mapGetters('count', ['getCurrentTreeData']),

    getProduct2() {},
    handleNodeClick(data) {
      console.log('data', 'data')
      this.$refs.dailogTree
    },
    getAllParentLable(node) {
      if (node.parent) {
        return this.getAllParentLable(node.parent) + '/' + node.label
      } else {
        return ''
      }
    },
    isShowDialogVisible() {
      this.addDialogVisible = true
      
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    handleChange() {
      console.log('handleChange', this.dialogValue)
    },
  },
}
</script>
<style scoped>
</style>