<template>
  <el-dialog :visible.sync="dialogVisible" width="60%" >
    <div class="login">
      <div class="transferWrap">
        <div class="transfer">
          <div class="left">
            <p
              class="item"
              :class="{'active':currentIndex1==index}"
              @click="sendLeft(item)"
              v-for="(item,index) in  leftData"
              :key="item.id"
            >{{item.title}}</p>
          </div>
          <div class="middle">></div>
          <div class="right">
            <p
              class="item"
              @click="deleitem(index)"
              v-for="(item,index) in  rightData"
              :key="index"
            >
              {{item.title}}
              <i style="margin-left：10px" class="el-icon-circle-close"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="sumbit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'tranfers',
  props: {
   
  },
  data() {
    return {
      dialogVisible: false,
      navDate: [
        { title: '智能办会' },
        {
          title: '智慧指挥',
        },
      ],
      currentIndex: 0,
      currentIndex1: 0,
      leftData: [
        {
          id: 0,
          title: '澄邈',
        },
        {
          id: 1,
          title: '德泽',
        },
        {
          id: 2,
          title: '海超',
        },
        {
          id: 3,
          title: '海昌',
        },
        {
          id: 4,
          title: '瀚钰',
        },
        {
          id: 5,
          title: '瀚文',
        },
      ],
      rightData: [],
      seleData: [],
    }
  },
  computed: {},
  components: {},
  methods: {
    current(index) {
      this.currentIndex = index
    },
    sendLeft(leftItem) {
      this.currentIndex1 = leftItem.id
      if (!this.rightData.includes(leftItem)) {
        this.rightData.push(leftItem)
      } else {
        return
      }
    },
    sumbit() {
      this.seleData = []
      this.rightData.map((item) => {
        if (!this.seleData.includes(item)) {
          this.seleData.push(item)
        } else {
          return ''
        }
      })
      this.dialogVisible = false;
      this.$emit('jianting',this.seleData);
    },
    deleitem(index) {
      this.rightData.splice(index, 1)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
  },
}
</script>
<style lang='less' scoped>
.login {
  padding-top: 28px;
  .transferWrap {
    .transfer {
      display: flex;
      .left,
      .right {
        width: 200px;
        height: 150px;
        border: 1px solid #3c3c3c;
        padding: 10px 10px;
        .item {
          height: 25px;
          line-height: 25px;
          text-align: center;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-bottom: 1px solid #3c3c3c;
        }
        .active {
          color: blue;
        }
      }
      .middle {
        height: 200px;
        line-height: 200px;
        margin: 0 100px;
      }
    }
    .submit {
      height: 30px;
      line-height: 30px;
      text-align: center;
      .button {
        width: 150px;
      }
    }
  }
}
/deep/.el-dialog__footer {
  text-align: center;
}
</style>