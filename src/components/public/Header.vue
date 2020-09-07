<template>
  <div class='Header'>
    <div class="container">
      <h1>欢の博客</h1>
      <ul class="nav">
        <li
          class="nav-item"
          v-for="item in navList"
          :key="item.id"
          :class="{active: activeNav == item.id}"
          @click="changeNav(item)"
        >
          <div class="nav-cont">
            <i :class="item.icon"></i>
            <router-link :to="item.path">{{item.title}}</router-link>
          </div>
          <div class="nav-bot"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: [
        { id: '1', title: '首页', path: '/', icon: 'el-icon-sunrise-1' },
        { id: '2', title: '文章', path: '/', icon: 'el-icon-notebook-1' },
        { id: '3', title: '归档', path: '/', icon: 'el-icon-map-location' },
        { id: '4', title: '关于', path: '/', icon: 'el-icon-guide' },
      ],
      activeNav: '1'
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    /**
     * @description:切换导航
     * @param {Object}
     * @return {null}
     */
    changeNav (item) {
      this.activeNav = item.id
    }
  }

}
</script>

<style lang='less' scoped>
.Header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #dcdfe6;
  h1{
    font-size: 20px;
  }
  .container {
    width: 65%;
    height: 100%;
    margin: 0 auto;
  }
  h1 {
    float: left;
  }
  .nav {
    float: right;
    height: 100%;
    display: flex;
    .nav-item {
      transition: 0.5s;
      margin: 0 30px;
      cursor: pointer;
      .nav-cont{
        margin: 0px auto;
        padding: 0 20px;
      }
      .nav-bot{
        transition: 0.5s;
        width: 0;
        height: 2px;
        background: #1989fa;
        margin: 0 auto;
      }
    }
    .nav-item.active {
      color: #1989fa;
      margin: 0 50px;
      a {
        color: #1989fa;
      }
      .nav-bot{
        width: 100%;
      }
    }
  }
}
</style>
