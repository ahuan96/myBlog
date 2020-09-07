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

<style>
#app{
  margin: 0 auto;
  color: #909399;
}
</style>
