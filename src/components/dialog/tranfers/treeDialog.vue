<template>
  <div class="wrap">
    <el-input v-model="currentTreeData" @focus="focus"></el-input>
    <el-tree
      v-show="showTree"
      class="tree"
      ref="dailogTree"
      :data="editCurrentTreeData"
      default-expand-all
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>
<script>
import {mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      dialogVisible: false,
      name: '',
      defaultProps: {
        label: 'label',
        children: 'children',
        value: 'label',
      },
      showTree: false,
    }
  },
  computed: {
    ...mapState('count', ['currentTreeData']),
    ...mapState('count', ['editCurrentTreeData']),
  },

  mounted() {
  
  },
  methods: {
    ...mapMutations('count', ['setCurrentTreeData']),
    shoWDialogVisible() {
      this.dialogVisible = true
    },
    getAllParentLable(node) {
      if (node.parent) {
        return this.getAllParentLable(node.parent) + '/' + node.label
      } else {
        return ''
      }
    },
    //只有最后一级可以点击
    handleNodeClick(data, node, self) {
      if (!data.children) {
        this.showTree = false
      } else if (data.children.length == 0) {
        this.showTree = false
      }
      if (this.showTree == false) {
        let a = this.getAllParentLable(node)
        let cureentData = a.substring(1, a.length)
        this.setCurrentTreeData(cureentData)
      }
    },

    focus() {
      this.showTree = true
    },
  },
}
</script>
<style lang='less' scoped>
.wrap {
  width: 300px;
  height: 50px;
  position: relative;
  .tree {
    position: absolute;
    left: 0;
    top: 40px;
    background: #fff;
    width: 300px;
    min-height: 100px;
    height: 300px;
    overflow: scroll-y;
    z-index: 100;
    border: 1px solid #ccc;
  }
}
</style>