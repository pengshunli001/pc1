<template>
  <el-container>
    <el-header>
      <div class="bells" @click="openNewsTable">
        <i class="el-icon-bell" style="font-size: 20px"></i>
        <span class="num">112</span>
      </div></el-header
    >
    <el-container>
      <el-aside :width="isCollapse ? '131px' : '200px'">
        <div class="title" @click="isOpen">
          <i class="el-icon-edit"></i>
        </div>
        <el-menu
          :collapse="isCollapse"
          :default-active="activePath"
          :unique-opened="true"
          :collapse-transition="false"
          router
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in leftNav"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconleftFirst[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              v-for="item1 in item.children"
              :key="item1.id"
              :index="item1.path + ''"
              @click="gotoTtem(item1)"
            >
              <template slot="title">
                <i :class="iconLeftSencod[item1.id]"></i>
                {{ item1.authName }}
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <div>
          <a href="/操作手册.docx" download="操作手册.docx">操作手册</a>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- newsTable表格信息 -->
    <el-dialog
      title="来文信息列表"
      :visible.sync="newsTableDialogVisible"
      width="65%"
   
    >
      <el-table
        :data="tableData"
        border
        class="table"
        ref="table"
        :height="400"
      >
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="来文编号"></el-table-column>
        <el-table-column prop="name" label="来问主题"></el-table-column>
        <el-table-column prop="address" label="来文时间"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-button type="primary" size="small">修改状态</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="Intelligent(scope.row)">智能识别</el-button>
            <el-button type="danger" size="small">来文下载</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
         style="text-align:center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </el-dialog>
  </el-container>
</template>
<script>
import navData from './navData'
export default {
  data() {
    return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      newsTableDialogVisible: false,
      tableData: [
        {
          date: '1111111221222122',
          name: '党的十八大会议通知',
          address: '2020年10月29日 16：31',
          status: true,
          id:'1'
        },
        {
          date: '1111111221222122',
          name: '党的十八大会议通知',
          address: '2020年10月29日 16：31',
          status: true,
           id:'2'
        },
        {
          date: '1111111221222122',
          name: '党的十八大会议通知',
          address: '2020年10月29日 16：31',
          status: true,
           id:'3'
        },
        {
          date: '1111111221222122',
          name: '党的十八大会议通知',
          address: '2020年10月29日 16：31',
          status: true,
           id:'4'
        },
      ],
      leftNav: navData.leftNav,
      iconleftFirst: {
        101: 'el-icon-user',
        102: 'el-icon-s-tools',
        103: 'el-icon-s-grid',
      },
      iconLeftSencod: {
        110: 'el-icon-s-help',
        111: 'el-icon-help',
        112: 'el-icon-s-promotion',
        113: 'el-icon-upload',
        115: 'el-icon-upload',
        114: 'el-icon-upload',
      },
      isCollapse: false,
      activePath: '',
    }
  },
  methods: {
    Intelligent(val){
    this.$router.replace({path:'/category',query: {id2:val.id}});
    this.newsTableDialogVisible=false
    },
    openNewsTable() {
      this.newsTableDialogVisible = true
    },
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    isOpen() {
      this.isCollapse = !this.isCollapse
    },
    gotoTtem(item1) {
      this.$router.push(item1.path)
      this.activePath = item1.path
      window.sessionStorage.setItem('activePath', this.activePath)
    },
  },
  created() {
    window.sessionStorage.getItem('activePath')
  },
  mounted() {},
}
</script>
<style lang='less' scoped>
.el-container {
  width: 100%;
  height: 100vh;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 30px;
    .bells {
      margin-left: 500px;
      height: 50px;
      line-height: 50px;
      display: flex;
      align-items: center;
      .el-icon-bell {
        color: blue;
      }
      .num {
        font-size: 15px;
        color: red;
      }
    }
  }
  .el-container {
    display: flex;
    height: calc(100vh - 60px);
    .el-aside {
      width: 200px;
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
      .title {
        // width: 100%;
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: 0.3rem;
        text-align: center;
      }
      /deep/.el-menu {
        padding-left: 15px;
      }
      /deep/.el-menu-item.is-active {
        background: #fff;
      }
    }
    .el-main {
      flex: 1;
      width: calc(100% - 300px);
    }
  }
}
</style>