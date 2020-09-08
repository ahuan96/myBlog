<template>
  <div class='me scroll-item' v-scroll-reveal.reset>
    <el-card
      class="box-card"
      body-style="padding:0"
    >
      <div class="me-top">
        <i class="el-icon-user-solid"></i>
        <span>个人简介</span>
      </div>
      <div class="avatar"><img src="../../assets/imgs/avatar.jpg"></div>
      <p class="desc">大胆点生活，其实你没那么多观众</p>
      <ul class="me-info">
        <li>
        <i>笔名：</i>
        <p>小明不言语</p>
      </li>
      <li>
        <i>性别：</i>
        <p>boy</p>
      </li>
      <li>
        <i>爱好：</i>
        <p>吃饭、睡觉、编程、游戏、看小说、追剧</p>
      </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Me',
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
.me {
  .me-top {
    border-bottom: 1px solid #ccc;
    padding: 20px;
    font-size: 16px;
    color: #000;
    i {
      color: #409eff;
    }
    span{
      font-weight: 700;
    }
  }
  .avatar {
    padding: 5px;
    img {
      border: 1px solid #ccc;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
  .desc {
    margin: 10px 0;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
  .me-info{
    padding:20px;
    line-height: 24px;
    font-size: 14px;
    li{
      i{
        float: left;
        width: 50px;
      }
      p{
        margin-left: 50px;
      }
    }
  }
}
</style>
