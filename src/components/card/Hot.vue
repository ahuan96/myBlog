<template>
  <div class='hot scroll-item' v-scroll-reveal.reset>
    <el-card
      class="box-card "
      body-style="padding:0"
    >
      <div class="me-top">
        <i class="el-icon-medal"></i>
        <span>热门文章</span>
      </div>
      <div class="hot-list">
         <p v-for="(item,idnex) in hotList" :key='item.id'><el-link href="#"><i>{{idnex + 1}}</i>{{item.title}}</el-link></p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Hot',
  data(){
    return {
      hotList:[
        {id:'1',title:'阿姨，我不想努力了'},
        {id:'2',title:'不！你想努力'},
        {id:'3',title:'阿姨，我不想努力了'},
        {id:'4',title:'阿姨，我不想努力了'},
        {id:'5',title:'阿姨，我不想努力了'},
        {id:'6',title:'阿姨，我不想努力了'},
        {id:'7',title:'阿姨，我不想努力了'},
        {id:'8',title:'阿姨，我不想努力了'},
        {id:'9',title:'阿姨，我不想努力了'},
      ]
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{

  }

}
</script>

<style lang='less' scoped>
.hot {
  margin: 20px 0;
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
  .hot-list{
    line-height: 24px;
    padding: 20px;
    font-size: 18px;
    i{
      font-weight: 700;
      padding-right:10px;
      color: #437dff;
      font-style: italic
    }
  }

}
</style>
