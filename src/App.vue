<template>
  <div id="app" >
       <router-view ></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast, NavBar } from 'vant'
Vue.use(Toast).use(NavBar)
//import { mapState } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      include: [],
      initCode: '',
      appId: '598388291e034340b42f63a55d11fd67',
      isIsz: '',
      isrelation: false,
      userInfo: [],
      userAccessToken: '',
      roles: [],
    }
  },
  created() {},
  watch: {
    $route(to, from) {
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name)
        if (to.name == 'index') {
          this.include = this.include.filter((item) => {
            return item !== 'eventClue'
          })
        }
      }
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        var index = this.include.indexOf(from.name)
        index !== -1 && this.include.splice(index, 1)
      }
    },
  },
  mounted() {
    // this.getInitCode();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.slide-left-enter,
.slide-right-leave-to {
  //transform: scale(0);
  opacity: 1;
  transform: translate(50%, 0);
}
.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translate(-50%, 0);
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active,
.slide-right-enter-active,
.slide-left-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active,
.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to,
  .slide-right-enter
      /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-50%);
  opacity: 0;
}
.slide-fade-enter,
.slide-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
#app {
  width: 100%;
  height: 100%;
  font: 12px/150% Arial, Verdana, '\5b8b\4f53';
  color: #666;
  background: #fff;
  //  overflow: scroll;
}
// .van-toast {
//     font-size: 14px;
//     background: rgba(0, 0, 0, 0.2);
//     color: #000;
//     border-radius: 25px;
//     line-height: 16px;
// }
.loading {
  border-radius: 0;
}
</style>
