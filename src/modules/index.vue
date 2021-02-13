<template>
  <div>
    <div class="imgWrap">
      <div v-for="item in imgUrl" :key="item" class="wrap">
        <upload title="请上传身份证正面" @imgUrlPush="imgUrlPush" />
      </div>
    </div>
    <button @click="submit">提交</button>
  </div>
</template>
<script>
import upload from '../components/upload/upload'
export default {
  data() {
    return {
      imgUrl: [''],
      idList:[],
      formData: {},
    }
  },
  components: {
    upload,
  },
  methods: {
    submit() {
      console.log('点击提交')
      console.log('formData', this.formData)
    },
    imgUrlPush(imgchild, callback) {
      let {imageUrl,imageId} =imgchild;
      if (imageUrl) {
        if (this.imgUrl.indexOf(imageUrl) == -1) {
          this.imgUrl.push(imageUrl);
          this.idList.push(imageId);
          callback(false)
        } else {
          callback(true)
        }
      }
    },
  },
}
</script>
<style lang='less' scoped>
.imgWrap {
  display: flex;
  .wrap {
    margin: 0 10px;
  }
}
</style>