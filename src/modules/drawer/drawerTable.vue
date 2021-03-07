<template>
  <div class="drawerWrap"  >
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="60%"
    >
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="直接添加" name="first">
          <EditTable />
        </el-tab-pane>
        <el-tab-pane label="从购物车添加" name="second"
          >从购物车添加</el-tab-pane
        >
        <el-tab-pane label="复用其他业务添加" name="third"
          >复用其他业务添加</el-tab-pane
        >
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script>
import EditTable from './editTable'
export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      activeName: 'first',
    }
  },
  components: {
    EditTable,
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    isShowDrawer() {
      this.drawer = true
    },
  },
}
</script>
<style lang='less' scoped>
.drawerWrap {
}
</style>