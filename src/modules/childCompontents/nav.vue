<template>
  <div class="nav">
    <div class="inner">
      <div class="logo"></div>
      <div class="theme">
        <div class="serarch">
          <div style="margin-top: 15px">
            <el-input
              placeholder="请输入内容"
              v-model="input3"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <span
            class="shopCar"
            @mouseenter="carMouseenter"
            @mouseleave="carMouseLeave"
            :style="active1"
            ><i
              class="el-icon-shopping-cart-2"
              style="font-size: 15px; margin-right: 10px; font-weight: 700"
            ></i>
            <span>我的购物车</span></span
          >
        </div>
        <div class="hotwords">
          <span class="hot" v-for="(item, index) in hotwords" :key="index">
            {{ item }}
          </span>
        </div>
        <div class="navitems">
          <span class="item" v-for="(item, index) in hotwords" :key="index">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav1',
  data() {
    return {
      input3: '',
      active1: '',
      hotwords: [
        '手机销售部',
        '大闸蟹',
        '5折车品',
        '',
        '品质居家',
        '国庆放假',
        '9.9元起',
        '品质男装',
        '品质家具',
        '品质内衣',
      ],
      navitems: [
        '秒杀',
        '优惠卷',
        'PLUS会员',
        '品牌闪购',
        '拍卖',
        '京东家电',
        '京东超市',
        '京东生鲜',
        '京东国际',
        '京东金融',
      ],
    }
  },
  methods: {
    carMouseenter() {
      this.active1 = 'border-color:red'
    },
    carMouseLeave() {
      this.active1 = ''
    },
  },
}
</script>
<style lang='less' scoped>
.nav {
  height: 141px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ccc;
  position: relative;
  z-index: 3;
  .inner {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    .logo {
      width: 192px;
      height: 120px;
      background-image: url(//img1.360buyimg.com/da/jfs/t1/17098/23/11599/160999/5c90a484E27dd5514/7287f0d182775168.gif?v=0.09222849284185308);
      background-size: 100% 100%;
      margin-right: 10px;
    }
    .theme {
      .serarch {
        display: flex;
        justify-content: space-around;
        align-items: center;
        /deep/.input-with-select {
          width: 500px;
          height: 26px;
          border: 2px solid red;
          line-height: 26px;
          font-size: 12px;
          margin-right: 25px;
          .el-input__inner {
            outline: none;
            border-radius: none;
            border: none;
          }
        }
        /deep/.el-input-group__append {
          background: red;
          color: #fff;
          border: none;
        }
        .shopCar {
          width: 130px;
          height: 40px;
          border: 1px solid #eee;
          margin-top: 10px;
          line-height: 40px;
          text-align: center;
          color: red;
          font-weight: 700;
        }
      }
      .hotwords {
        display: flex;
        .hot {
          padding: 15px 10px 10px;
          &:nth-child(1) {
            color: red;
          }
        }
      }
      .navitems {
        display: flex;
        margin-left: -30px;
        .item {
          padding: 10px 10px;
          font-weight: 700;
          &:nth-child(1) {
            color: red;
          }
        }
      }
    }
  }
}
</style>