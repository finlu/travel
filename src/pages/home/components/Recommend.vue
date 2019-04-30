<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in recommendList"
          :key="index">
        <!--图片定大小-->
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园世界花卉大观园世界花卉大观园'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园世界花卉大观园世界花卉大观园'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园世界花卉大观园世界花卉大观园'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园世界花卉大观园世界花卉大观园'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园世界花卉大观园世界花卉大观园'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园世界花卉大观园世界花卉大观园'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height 30px
    background-color: #eee
    text-indent 10px
    margin-top 10px
  .item
    overflow hidden
    height 98px
    display flex
    font-size 12px
    .item-img
      height 83px
      width 83px
      padding 5px
    .item-info
      flex 1
      padding 2px
      min-width 0
      padding-left 5px
      .item-title
        line-height 40px
        font-size 18px
        ellipsis()
      .item-desc
        font-size 10px
        color #ccc
        ellipsis()
      .item-button
        background-color #ff9300
        color #fff
        border-radius 3px
        padding 0 2px
        margin-top 10px
</style>
