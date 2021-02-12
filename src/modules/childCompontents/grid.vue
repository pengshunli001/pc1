<template>
  <div class="grid">
    <div class="left">
      <p
        class="item"
        v-for="(item, index) in leftData"
        :key="index"
        :style="activeleft"
        @mouseenter="leftMouseenter(index)"
        @mouseleave="leftMouseleave"
        :class="{ active: leftCurrentindex == index }"
      >
        {{ item.title }}
      </p>
    </div>
    <div class="right">
      <img
        class="focus-item-img"
        src="//img13.360buyimg.com/pop/s1180x940_jfs/t1/149879/16/9679/78087/5f72fbf9Ee606948a/2f30c2e1b498844c.jpg.webp"
      />
      <div class="innner"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'grid1',
  data() {
    return {
      activeleft: '',
      leftCurrentindex: 0,
      leftData: [
        {
          id: '1',
          title: '家用电器',
        },
        {
          id: '2',
          title: '手机/运营商/数码',
        },
        {
          id: '3',
          title: '电脑/办会',
        },
        {
          id: '4',
          title: '家居/家具/家装/厨具',
        },
        {
          id: '5',
          title: '男装/女装/童装/内衣',
        },
        {
          id: '6',
          title: '美妆/个护清洁/宠物',
        },
        {
          id: '7',
          title: '女鞋/箱包/钟表/珠宝',
        },
        {
          id: '8',
          title: '男鞋/运动/户外',
        },
        {
          id: '9',
          title: '男鞋/运动/户外',
        },
        {
          id: '10',
          title: '男鞋/运动/户外',
        },
        {
          id: '11',
          title: '男鞋/运动/户外',
        },
        {
          id: '12',
          title: '男鞋/运动/户外',
        },
        {
          id: '13',
          title: '男鞋/运动/户外',
        },
        {
          id: '14',
          title: '男鞋/运动/户外',
        },
      ],
    }
  },
  methods: {
    leftMouseenter(index) {
      this.leftCurrentindex = index
    },
    leftMouseleave() {
      this.activeleft = ''
    },
  },
}
</script>
<style lang='less' scoped>
.grid {
  width: 1190px;
  margin: 0 auto;
  position: relative;
  height: 480px;
  margin-top: 10px;
  display: flex;
  z-index: 3;
  .left {
    width: 190px;
    height: 470px;
    border: 1px solid #eee;
    background: #fff;
    padding-top: 10px;
    .item {
      padding: 0;
      margin: 0;
      line-height: 33px;
      text-align: center;
      overflow: hidden;
      &.active {
        background: #eee;
        color: red;
      }
    }
  }
  .right {
    flex: 1;
    margin-left: 10px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .innner {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>