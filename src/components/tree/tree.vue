<template>
  <div class="custom-tree-container">
    <div class="block">
      <el-tree :data="data" node-key="id" :expand-on-click-node="false">
        <span
          @mouseleave="mouseleave(node, data)"
          @mouseenter="mouseenter(node, data)"
          class="custom-tree-node"
          slot-scope="{ node, data }"
          @click="showTable(node,data)"
        >
          <span>{{ node.label }}</span>
          <span v-show="data.show">
            <el-button type="text" size="mini" @click="() => append(data)">
              添加
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)"
            >
              删除
            </el-button>
            <el-button
              v-show="!data.children"
              type="text"
              size="mini"
              @click="() => editNode(data)"
            >
              编辑
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息{{ currentNodeDate }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
let id = 1000

export default {
  data() {
    const data = [
      {
        id: 1,
        label: '产品',
        children: [
          {
            id: 4,
            label: '子产品',
            children: [
              {
                id: 9,
                label: '系统',
                children: [
                  {
                    id: 10,
                    label: '应用',
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
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
      currentNodeDate: '',
    }
  },
  methods: {
    showTable(node,data){
      console.log(node,data)
    },
    mouseenter(node, data) {
      this.$set(data, 'show', true)
   
    },
    // 树节点鼠标移入
    mouseleave(node, data) {
      this.$set(data, 'show', false)
    },

    append(data) {
      this.dialogVisible = true
      this.currentNodeDate = data
      // const newChild = { id: id++, label: 'testtest', children: [] }
      // if (!data.children) {
      //   this.$set(data, 'children', [])
      // }
      // data.children.push(newChild)
    },
    editNode(data) {
      this.dialogVisible = true
      this.currentNodeDate = data
    },

    remove(node, data) {
      this.dialogVisible = true
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
    submit() {
      console.log(this.currentNodeDate)

      this.dialogVisible = false
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
.custom-tree-node {
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

</style>