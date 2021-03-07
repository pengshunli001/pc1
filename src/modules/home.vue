<template>
  <div class="home">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div class="wrap" style="display: flex">
          <div class="leftWrap">
            <div :class="['left']" v-if="isShow">
              <Tree />
            </div>
            <div class="open">
              <i
                class="el-icon-arrow-left"
                v-show="isShow == true"
                @click="open(false)"
              ></i>
              <i
                class="el-icon-arrow-right"
                v-show="isShow == false"
                @click="open(true)"
              ></i>
            </div>
          </div>

          <div class="right">
            <div class="search">
              <el-form
                ref="form"
                :model="form"
                :inline="true"
                label-width="80px"
              >
                <el-form-item label="产品">
                  <el-select v-model="form.name" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="状态">
                  <el-select v-model="form.name1" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="addnum"
                    >搜索{{ state.count }}</el-button
                  >
                </el-form-item>
              </el-form>
              <el-button type="success" @click="addZY">添加</el-button>
            </div>

            <div class="wrapTable">
              <div class="btnWrap" v-show="state.treeTable.showEditTable">
                <el-button type="primary">提交</el-button>
                <el-button type="success">提报</el-button>
                <el-button type="success">移动</el-button>
                <el-button type="warning">删除</el-button>
                <el-button>{{state.treeTable.showEditTable }}</el-button>
              </div>
              <TreeTable />
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    </el-tabs>
    <DrawerTable ref="drawerTable" />
  </div>
</template>
<script>
import TreeTable from '../components/table/treeTable'
import DrawerTable from './drawer/drawerTable'
import Tree from './tree/tree'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      activeName: 'first',
      isShow: true,
      form: {
        name: '',
        name1: '',
      },
      options: [
        {
          value: '选项1',
          label: '产品',
        },
        {
          value: '选项2',
          label: '子产品',
        },
      ],
      options1: [
        {
          value: '选项1',
          label: '完成',
        },
        {
          value: '选项2',
          label: '未完成',
        },
      ],
    }
  },
  computed: {
    // ...mapState(['treeTable', 'count']),
    ...mapState('count', {
      state: (state) => state,
    }),
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    ...mapMutations('count', ['add']),
    //显示左侧弹框
    addZY() {
      this.$refs.drawerTable.isShowDrawer()
    },
    addnum() {
      console.log(this)
      this.add()
    },
    onSubmit() {
      console.log('submit!')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    open(data) {
      console.log('data', data)
      this.isShow = data
    },
  },
  components: {
    TreeTable,
    Tree,
    DrawerTable,
  },
}
</script>
<style lang='less' scoped>
.home {
  background: rgba(255, 255, 255);
  padding: 0 10px;
  .wrap {
    .leftWrap {
      position: relative;
      display: flex;
      align-items: center;
      .left {
        width: 200px;
        height: calc(100vh - 100px);
        background: #ccc;
        box-sizing: border-box;
      }
      .open {
        width: 20px;
        height: 50px;
        line-height: 50px;
        background-color: #ccc;
        font-size: 20px;
        border: 1px solid #ccc;
        border-radius: 10px 10px 10px 10px;

        &:hover {
          background-color: rgba(0, 183, 255, 0.877);
          color: #fff;
        }
      }
    }

    .right {
      width: calc(100% - 210px);
      height: calc(100vh - 100px);
      background: #ccc;
      .search {
        margin-top: 20px;
        display: flex;
      }
      .wrapTable {
        position: relative;
        .btnWrap {
          width: 100%;
          height: 50px;
          line-height: 50px;
          position: absolute;
          left: 52px;
          top: 10px;
          z-index: 100;
          background-color: #fff;
        }
      }
    }
  }
}
</style>