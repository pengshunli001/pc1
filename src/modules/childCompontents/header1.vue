<template>
  <div class="header1">
    <div class="wrap">
      <div
        class="left"
        :class="{ changeStyle: isChange == true }"
        @mouseenter="mouseenter"
        @mouseleave.prevent="mouseleave"
      >
        <city ref="city" :selectCity="selectCity" />
        <i class="el-icon-caret-bottom" style="margin-right: 3px"></i>
        <span v-if="city.length">{{ city }}</span>
        <span v-else>北京</span>
      </div>
      <ul class="right">
        <li
          class="item"
          v-for="(item, index) in headerData"
          :key="index"
          @mouseenter.prevent="activeItem(index)"
          :class="{ active: currentIndex == index }"
        >
          <a href="###" >
            <right ref="right" :index="index" />
            <span > {{ item.title }} </span>
            <i v-if="item.isShow" class="el-icon-arrow-down"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import City from './city'
import Right from './headerRight'
export default {
  name: 'header1',
  components: {
    City,
    Right,
  },
  data() {
    return {
      active1: '',
      isChange: false,
      isChange1: false,
      city: '',
      headerData: [
        {
          id: 1,
          title: '您好，请登录 免费注册',
        },
        {
          id: 3,
          title: '我的订单',
        },
        {
          id: 4,
          title: '我的京东',
          isShow: true,
        },
        {
          id: 5,
          title: '京东会员',
        },
        {
          id: 6,
          title: '企业采购',
          isShow: true,
        },
        {
          id: 7,
          title: '客服服务',
          isShow: true,
        },
        {
          id: 8,
          title: '网站导航',
          isShow: true,
        },
        {
          id: 9,
          title: '手机京东',
        },
      ],
      currentIndex: 0,
    }
  },
  mounted() {},
  methods: {
    activeItem(index) {
      this.currentIndex = index
      for (var i = 0; i < this.headerData.length; i++) {
        if (this.currentIndex == i) {
          this.$refs.right[i].showRight()
        } else {
          this.$refs.right[i].hiddleRight()
        }
      }
    },
    selectCity(item) {
      this.city = item
      this.$refs.city.isHidden()
    },
    mouseenter() {
      this.$refs.city.isShow()
    },
    mouseleave() {
      this.isChange = true
      this.$refs.city.isHidden()
    },
  },
}
</script>
<style lang='less' scoped>
.header1 {
  height: 30px;
  line-height: 30px;
  color: #999;
  border-bottom: 1px solid #ddd;
  background-color: #e3e4e5;
  position: relative;
  z-index: 4;
  .wrap {
    margin: auto;
    width: 1190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    .left {
      padding: 0 10px;
      position: relative;
      z-index: 2;
      height: 31px;
      box-sizing: border-box;
      &:hover {
        background: #fff;
        border-left: 1px solid #ccc;
      }
      .changeStyle {
        background: #fff;
        border-left: 1px solid #ccc;
      }
    }
    .right {
      display: flex;
      .item {
        &:hover {
          background: #fff;
          border-left: 1px solid #ccc;
          box-sizing: border-box;
        }
        .changeStyle {
          background: #fff;
          border-left: 1px solid #ccc;
        }
        a {
          border-right: 1px solid #ccc;
          padding: 0 10px;
          position: relative;
          //获取最后一个子元素
          .el-icon-arrow-down {
            margin-left: 3px;
            font-size: 12px;
          }
          &:hover {
            color: red;
          }
        }
        .active {
          color: red;
        }
      }
    }
  }
}
</style>