<template>
  <div class='articleList  animated fadeIn'>
    <template v-for="item in list">
      <div
        class="scroll-item"
        :key="item.id"
        v-scroll-reveal.reset
      >
        <el-card class="article-card ">
          <h5 class="aticle-title">
            <el-link>{{item.title}}</el-link>
          </h5>
          <el-row class="article-tags">
            <el-tag
              v-for="(tag,index) in item.tags"
              :key="index"
              type="success"
            >{{tag}}</el-tag>
          </el-row>
          <el-row class="article-desc">
            图片处理函数功能：缩放、剪切、相框、水印、锐化、旋转、翻转、透明度、反色处理并保存历史记录的思路：当有图片有改动时自动生成一张新图片
          </el-row>
          <el-row class="article-info">
            <p>
              <i class="el-icon-time"></i>
              <span>发表于</span>
              <span>2020-07-30 15:53:38</span>
            </p>
            <p>
              <i class="el-icon-reading"></i>
              <span>阅读量</span>
              <span>100</span>
            </p>
            <p>
              <i class="el-icon-chat-line-round"></i>
              <span>评论数</span>
              <span>20</span>
            </p>
          </el-row>
        </el-card>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      list: [
        { id: '1', title: '如何走人生巅峰', desc: '图片处理函数功能：缩放、剪切、相框、水印、锐化、旋转、翻转、透明度、反色处理并保存历史记录的思路：当有图片有改动时自动生成一张新图片', time: '2020-07-30 15:53:38', read: '100', discuss: '20', tags: ['Javascript', '前端'] },
        { id: '2', title: '如何走人生巅峰', desc: '图片处理函数功能：缩放、剪切、相框、水印、锐化、旋转、翻转、透明度、反色处理并保存历史记录的思路：当有图片有改动时自动生成一张新图片', time: '2020-07-30 15:53:38', read: '100', discuss: '20', tags: ['Javascript', '前端'] },
        { id: '3', title: '如何走人生巅峰', desc: '图片处理函数功能：缩放、剪切、相框、水印、锐化、旋转、翻转、透明度、反色处理并保存历史记录的思路：当有图片有改动时自动生成一张新图片', time: '2020-07-30 15:53:38', read: '100', discuss: '20', tags: ['Javascript', '前端'] },
        { id: '4', title: '如何走人生巅峰', desc: '图片处理函数功能：缩放、剪切、相框、水印、锐化、旋转、翻转、透明度、反色处理并保存历史记录的思路：当有图片有改动时自动生成一张新图片', time: '2020-07-30 15:53:38', read: '100', discuss: '20', tags: ['Javascript', '前端'] },
        { id: '5', title: '如何走人生巅峰', desc: '图片处理函数功能：缩放、剪切、相框、水印、锐化、旋转、翻转、透明度、反色处理并保存历史记录的思路：当有图片有改动时自动生成一张新图片', time: '2020-07-30 15:53:38', read: '100', discuss: '20', tags: ['Javascript', '前端'] },
        { id: '6', title: '如何走人生巅峰', desc: '图片处理函数功能：缩放、剪切、相框、水印、锐化、旋转、翻转、透明度、反色处理并保存历史记录的思路：当有图片有改动时自动生成一张新图片', time: '2020-07-30 15:53:38', read: '100', discuss: '20', tags: ['Javascript', '前端'] },
      ]
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
.article-card {
  margin-bottom: 10px;
  .aticle-title {
    margin-bottom: 10px;
    a {
      font-size: 26px;
    }
  }
  .article-tags {
    @{deep} .el-tag {
      height: 22px;
      line-height: 20px;
      margin-right: 10px;
    }
  }
  .article-desc {
    margin: 10px 0;
    color: #555;
    line-height: 25px;
  }
  .article-info {
    color: #999;
    font-size: 12px;
    display: flex;
    p {
      margin-right: 20px;
    }
  }
}
</style>
