<template>
  <div class="custom-tree-container">
    <div class="title">
      <span class="info1">业务树</span>
      <div class="info">
        <span @click="expandAll(true)" v-if="isOpen == true"
          >打开<i class="el-icon-arrow-down"></i
        ></span>
        <span @click="expandAll(false)" v-if="isOpen == false"
          >收起<i class="el-icon-arrow-up"></i
        ></span>
      </div>
    </div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
    <el-tree
      :data="dataList"
      node-key="id"
      :filter-node-method="filterNode"
      :expand-on-click-node="false"
      ref="ProjectTree"
      highlight-current
      default-expand-all
    >
      <span
        @mouseleave="mouseleave(node, data)"
        @mouseenter="mouseenter(node, data)"
        class="custom-tree-node"
        slot-scope="{ node, data }"
        @click="showTable(node, data)"
      >
        <span>{{ node.label }}</span>
        <span v-show="data.show">
          <el-button
            v-show="data.children"
            type="text"
            size="mini"
            @click="() => append(node, data)"
          >
            添加
          </el-button>
          <el-button
            v-show="data.level !== 1"
            type="text"
            size="mini"
            @click="() => editNode(node, data)"
          >
            编辑
          </el-button>
          <el-button
            v-show="data.level !== 1"
            type="text"
            size="mini"
            @click="() => remove(node, data)"
          >
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
    <AddDailog ref="addDailog" />
  </div>
</template>
<script>
let id = 1000
import { mapState, mapGetters, mapMutations } from 'vuex'
import AddDailog from './addDailog'
import _ from 'lodash'
export default {
  data() {
    const data = [
      {
        id: 1,
        label: '办公平台',
        name: 'mo',
        is_hand_add: false,
        level: 1,
        children: [
          {
            id: 4,
            label: '测试P',
            name: 'test-p',
            is_hand_add: false,
            level: 2,
            children: [
              {
                id: 9,
                label: '测试s',
                name: 'test-s',
                is_hand_add: false,
                level: 3,

                children: [
                  {
                    id: 10,
                    label: '测试D',
                    name: 'test-d',
                    is_hand_add: false,
                    level: 4,
                    children: [],
                  },
                  {
                    id: 11,
                    label: '测试F',
                    name: 'test-f',
                    is_hand_add: false,
                    level: 4,
                    children: [],
                  },
                ],
              },
              {
                id: 15,
                label: '测试j',
                name: 'test-j',
                is_hand_add: false,
                level: 3,

                children: [
                  {
                    id: 10,
                    label: '测试D',
                    name: 'test-d',
                    is_hand_add: false,
                    level: 4,
                    children: [],
                  },
                  {
                    id: 11,
                    label: '测试F',
                    name: 'test-f',
                    is_hand_add: false,
                    level: 4,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
    return {
      dialogVisible: false,
      dataList: data,
      currentNodeDate: {},
      filterText: '',
      isOpen: true,
    }
  },
  components: {
    AddDailog,
  },
  watch: {
    filterText(val) {
      this.$refs.ProjectTree.filter(val)
    },
  },
  methods: {
    ...mapMutations('count', ['setCurrentTreeData', 'setEditCurrentTreeData','setCurrentLevel']),
    //手动空着展开与收起
    expandAll(bool) {
      this.isOpen = bool
      var nodes = this.$refs.ProjectTree.store.nodesMap
      for (var i in nodes) {
        nodes[i].expanded = bool
      }
      this.isOpen = !this.isOpen
    },
    showTable(node, data) {
      console.log(node, data)
      data.id
    },
    mouseenter(node, data) {
      this.$set(data, 'show', true)
    },
    // 树节点鼠标移入
    mouseleave(node, data) {
      this.$set(data, 'show', false)
    },

    append(node, data) {
      /*s
     添加，获取当前层级数据的父级数据
     */
      this.$refs.addDailog.isShowDialogVisible()
      let a = this.getAllParentLable(node)
      let cureentData = a.substring(1, a.length)
      this.setCurrentTreeData(cureentData)
    },
    /*
    编辑，获取当前层级及以上树的数据
    */
    editNode(node, data) {
      let currentLevel=data.level;
      this.setCurrentLevel(currentLevel)
      let result = this.getAllParentNode(node)
      this.$store.commit('count/setEditCurrentTreeData', [result[0]])
      let a = this.getAllParentLable(node)
      let cureentData = a.substring(1, a.length)
      this.setCurrentTreeData(cureentData)
      console.log('result:', result[0])
      this.$refs.addDailog.isShowDialogVisible()
    },
    /*
    删除
    */
    remove(node, data) {
      // this.dialogVisible = true
      this.currentNodeDate = data
      // const parent = node.parent
      // const children = parent.data.children || parent.data
      // const index = children.findIndex((d) => d.id === data.id)
      // children.splice(index, 1)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },

    //过滤
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    getAllParentLable(node) {
      if (node.parent) {
        return this.getAllParentLable(node.parent) + '/' + node.label
      } else {
        return ''
      }
    },
    getAllParentId(node) {
      if (node.parent) {
        return this.getAllParentId(node.parent) + '/' + node.id
      } else {
        return ''
      }
    },
    getAllParentNode(node) {
      let currentLevel = node.level
      let objectDeepCopy
      let allParentNode = _.defaultsDeep(objectDeepCopy, this.dataList)
      if (allParentNode[0].children) {
        this.dealWithChildren(allParentNode[0], currentLevel)
      }
      return allParentNode
    },
    dealWithChildren(node, currentLevel) {
      console.log('currentLevel', currentLevel)
      if (
        node.children &&
        node.children.length > 0 &&
        node.children[0].level &&
        node.children[0].level <= currentLevel
      ) {
        for (var i = 0; i < node.children.length; i++) {
          this.dealWithChildren(node.children[i], currentLevel)
        }
      } else {
        node.children = undefined
      }
    },

    // renderContent(h, { node, data, store }) {
    //   return (
    //     <span class="custom-tree-node">
    //       <span>{node.label}</span>
    //       <span>
    //         <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
    //         <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
    //       </span>
    //     </span>);
    // }
  },
}
</script>

<style lang='less' scoped>
.custom-tree-container {
  .custom-tree-node {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    line-height: 30px;
    height: 30px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    margin: 8px 0;
    .info1 {
      font-weight: 700;
      font-size: 25px;
    }
  }
}
</style>