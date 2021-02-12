<template>
  <div>
    <div class="leader-wrap">
      <span class="leader" v-for="(item,index) in leader" :key="index">{{item.title}}</span>
      <i class="el-icon-circle-plus-outline" @click="addLeader"></i>
    </div>
    <Tranfers ref="Tranfers" @jianting='jianting' :leader='leader' />
  </div>
</template>
<script>
import Tranfers from './tranfers'
export default {
  name: 'tranferWrap',
  data() {
    return {}
  },
  props:{
   leader:{
     type:Array,
     default:()=>{
       return []
     }
     
   }
  },
  components:{
    Tranfers
  },
  methods: {
    addLeader() {
      this.$refs.Tranfers.dialogVisible = true
      this.$refs.Tranfers.seleData = []
    },
    jianting(val) {
      this.leader = val;
      
    },
  }
}
</script>
<style lang='less' scoped>
.leader-wrap {
  width: 100%;
  border: 1px solid #3c3c3c;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  .leader {
    position: relative;
    .el-icon-circle-plus-outline {
      margin-left: 10px;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      font-size: 20px;
    }
  }
}
</style>