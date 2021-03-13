<template>
  <div class="copyWrap">
    <div class="add"><span>添加</span></div>
    <ul class="titleWrap">
      <li class="item">
        <span style="color: red">*</span>
        <span>日期</span>
      </li>
      <li class="item">
        <span style="color: red">*</span>
        <span>姓名</span>
      </li>
      <li class="item">
        <span style="color: red">*</span>
        <span>年龄</span>
      </li>
      <li class="item">
        <span></span>
        <span>省份</span>
      </li>
      <li class="item">
        <span></span>
        <span>城市</span>
      </li>
      <li class="item">
        <span></span>
        <span>地址</span>
      </li>
      <li class="item">
        <span>操作</span>
        <span>1</span>
      </li>
    </ul>
    <ul class="titleWrap">
      <li class="item">
        <el-input v-model="formInline.user" placeholder="日期"></el-input>
      </li>
      <li class="item"></li>
      <li class="item">
        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
      </li>
      <li class="item">
        <el-select v-model="formInline.region" placeholder="年龄">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </li>
      <li class="item">
        <el-input v-model="formInline.user" placeholder="省份"></el-input>
      </li>
      <li class="item">
        <el-input v-model="formInline.user" placeholder="城市"></el-input>
      </li>
      <li class="item">
        <el-input v-model="formInline.user" placeholder="地址"></el-input>
      </li>
      <li class="item">
        <el-button size="mini">默认按钮</el-button>
        <el-button type="primary" size="mini">主要按钮</el-button>
        <el-button type="success" size="mini">成功按钮</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>
<style lang='less' scoped>
.copyWrap {
  .add {
    height: 30px;
    line-height: 32px;
  }
  .titleWrap {
    display: flex;
    padding: 10px 10px 0;
    .item {
      flex: 1;
      width: 100px;
      display: inline-block;
      border: 1px solid #ccc;
    }
  }
}
</style>