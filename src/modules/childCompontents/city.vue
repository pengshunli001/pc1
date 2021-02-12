<template>
  <div class="city" v-if="show">
    <div class="wrap">
      <span
        class="item"
        v-for="(item, index) in city"
        :key="index"
        @mouseover="mouseover(item, index)"
        :class="{ acitve: currenCity == index }"
        @click="select(item)"
      >
        {{ item }}
      </span>
    </div>
    <p class="des">地区专享版本</p>
    <div class="wrap">
      <span class="item1">中国港澳</span>
      <span class="item1">中国台湾</span>
      <span class="item1">京东全球</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'city',
  props: {
    selectCity: Function,
  },
  data() {
    return {
      show: false,
      city: [
        '北京',
        '上海',
        '天津',
        '重庆',
        '河北',
        '山西',
        '河南',
        '辽宁',
        '吉林',
        '黑龙江',
        '内蒙古',
        '江苏',
        '山东',
        '安徽',
        '浙江',
        '福建',
        '湖北',
        '湖南',
      ],
      currenCity: 0,
    }
  },
  methods: {
    select(item) {
     this.selectCity(item)
    },
    isShow() {
      this.show = true
    },
    isHidden() {
      this.show = false
    },
    mouseover(item, index) {
      this.currenCity = index
    },
  },
}
</script>
<style lang='less' scoped>
.city {
  position: absolute;
  left: -1px;
  top: 30px;
  z-index: 0;
  width: 350px;
  height: 300px;
  background: #fff;
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  .wrap {
    padding: 10px 10px 10px 25px;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 25%;
      text-align: left;
    }
    .item1 {
      width: 50%;
      text-align: left;
    }
    .acitve {
      color: red;
    }
  }
  .des {
    padding: 10px 10px 10px 25px;
  }
}
</style>