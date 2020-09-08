<template>
  <div id="app">
    <el-container direction="vertical">
      <el-header><Header></Header></el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
@deep: ~'>>>';
#app{
  font-family: Avenir,Helvetica,Arial,sans-serif;
  margin: 0 auto;
  color: #909399;
  .el-header {
    width: 100%;
    position: fixed;
    top:0;
    z-index: 9;
    background: #ffffff;
  }
  .el-main {
    padding-top: 60px;
  }
  // @{deep} .el-footer {
  //   width: 100%;
  //   position: fixed;
  //   bottom:20px;
  // }
}
</style>
