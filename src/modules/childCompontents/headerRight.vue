<template>
  <div class="wrap" v-show="show && index > 1">
    <!-- 我的京东 -->
    <div class="inner1" v-if="index == 2">
      <div class="itemWrap">
        <div
          class="item"
          v-for="(item, index) in innerData1.data1"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <div class="itemWrap">
        <div
          class="item2"
          v-for="(item, index) in innerData1.data2"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 企业采购 -->
    <div class="inner4" v-if="index == 4">
      <div class="itemWrap">
        <div class="item" v-for="(item, index) in innerData4" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="inner5" v-if="index == 5">
      <p class="title">客户</p>
      <div class="itemWrap">
        <div
          class="item"
          v-for="(item, index) in innerData5.data1"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <p class="title">商城</p>
      <div class="itemWrap">
        <div
          class="item"
          v-for="(item, index) in innerData5.data2"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="inner6" v-if="index == 6">
      <div class="titleWrap">
        <p class="title">特色主题</p>
        <div class="itemWrap">
          <div
            class="item"
            v-for="(item, index) in innerData6.data1"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="titleWrap">
        <p class="title">行业频道</p>
        <div class="itemWrap">
          <div
            class="item"
            v-for="(item, index) in innerData6.data2"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="titleWrap">
        <p class="title">生活服务</p>
        <div class="itemWrap">
          <div
            class="item"
            v-for="(item, index) in innerData6.data3"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="titleWrap">
        <p class="title">更多精选</p>
        <div class="itemWrap">
          <div
            class="item"
            v-for="(item, index) in innerData6.data4"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headerRight',
  data() {
    return {
      show: false,
      innerData1: {
        data1: [
          '待处理订单',
          '消息',
          '返修退换货',
          '我的问答',
          '降价商品',
          '我的关注',
        ],
        data2: ['我的京豆', '我的优惠券', '我的白条', '我的理财'],
      },
      innerData4: [
        '企业购',
        '商用场景馆',
        '工业品',
        '丰客多商城',
        '礼品卡',
        '微信企业购',
      ],
      innerData5: {
        data1: [
          '帮助中心',
          '售后服务',
          '在线客服',
          '意见建议',
          '电话客服',
          '客服邮箱',
          '金融资讯',
          '全球售客服',
          '企业客服',
        ],
        data2: [
          '合作招商',
          '成长中心',
          '商家后台',
          '京麦工作台',
          '商家帮助',
          '规则平台',
        ],
      },
      innerData6: {
        data1: [
          '帮助中心',
          '售后服务',
          '在线客服',
          '意见建议',
          '电话客服',
          '客服邮箱',
          '金融资讯',
          '全球售客服',
          '企业客服',
        ],
        data2: [
          '合作招商',
          '成长中心',
          '商家后台',
          '京麦工作台',
          '商家帮助',
          '规则平台',
        ],
        data3: [
          '合作招商',
          '成长中心',
          '商家后台',
          '京麦工作台',
          '商家帮助',
          '规则平台',
        ],
        data4: [
          '合作招商',
          '成长中心',
          '商家后台',
          '京麦工作台',
          '商家帮助',
          '规则平台',
        ],
      },
    }
  },
  props: {
    index: Number,
  },
  methods: {
    showRight() {
      this.show = true
    },
    hiddleRight() {
      this.show = false
    },
  },
  mounted() {},
}
</script>
<style lang='less' scoped>
.wrap {
  position: absolute;
  left: -1px;
  top: 0;
  width: 100%;
  height: 30px;
  .inner1 {
    position: absolute;
    left: 0;
    top: 22px;
    width: 200px;
    color: rgba(20, 5, 5, 0.5);
    background: #fff;
    .itemWrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 10px;
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .item {
        width: 50%;
        &.active {
          color: red;
        }
      }
      .item2 {
        width: 50%;
      }
    }
  }
  .inner4 {
    position: absolute;
    left: 0;
    top: 22px;
    width: 150px;
    color: rgba(20, 5, 5, 0.5);
    background: #fff;
    .itemWrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 10px;
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .item {
        width: 50%;
      }
    }
  }
  .inner5 {
    position: absolute;
    left: 0;
    top: 22px;
    width: 200px;
    color: rgba(20, 5, 5, 0.5);
    background: #fff;
    .title {
      font-weight: 700;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      padding-left: 10px;
    }
    .itemWrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 10px;
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .item {
        width: 50%;
      }
    }
  }
  .inner6 {
    position: absolute;
    left: -1000px;
    top: 22px;
    width: 1190px;
    color: rgba(20, 5, 5, 0.5);
    background: #fff;
    display: flex;
    .titleWrap {
      border: 1px solid #ccc;
      .title {
        color: black;
        font-weight: 700;
        padding-left: 10px;
      }
      .itemWrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px;
        .item {
          width: 50%;
        }
      }
    }
  }
}
</style>