<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ doubleCity }}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState(['city']), // 将state中的city属性映射到名字叫city的计算属性中
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height $headerHeight
    line-height $headerHeight
    display flex
    background-color $bgColor
    color #fff

    .header-left
      width 32px
      float left

      .back-icon
        text-align center
        font-size 20px

    .header-input
      flex 1
      background-color #fff
      border-radius 3px
      margin-top 7px
      margin-left 10px
      line-height 27px
      color #ccc
      height 27px
      padding-left 4px

    .header-right
      color #fff
      margin 0 5px 0 10px
      /*width 64px*/
      float right
      text-align center
      line-height 38px

      .arrow-icon
        font-size 20px
        margin-left -6px
</style>
