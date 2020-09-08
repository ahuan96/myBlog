<template>
  <div class='home'>
    <el-container>
    <el-main>
      <ArticleList></ArticleList>
    </el-main>
    <el-aside width="300px">
      <Me></Me>
      <Hot></Hot>
    </el-aside>
  </el-container>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
import Me from '@/components/card/Me'
import Hot from '@/components/card/Hot'
export default {
  name: 'Home',
  components:{
    ArticleList,
    Me,
    Hot
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }

}
</script>

<style lang='less' scoped>
@deep: ~">>>";
.home {
  min-height: 500px;
  width: 65%;
  margin: 0 auto;
  @{deep} .el-aside{
    padding-top: 20px;
  }
}


</style>
