<template>
  <div class="home">
    <button @click="$router.push('/login')">TOLOGIN</button>
    <!-- 头部 -->
    <header1 />
    <!-- 导航栏 -->
    <Nav />
    <!-- grid -->
    <Grid />
  </div>
</template>
<script>
import header1 from './childCompontents/header1'
import Nav from './childCompontents/nav'
import Grid from './childCompontents/grid'
export default {
  name: 'index',
  data() {
    return {}
  },
  components: {
    header1,
    Nav,
    Grid
  },
}
</script>
<style lang='less' scoped>
.home{
  height: 100vh;
  background: #eee;
}
</style>