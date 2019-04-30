<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{ this.city }}
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height 43px
    line-height 43px
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
      width 64px
      float right
      text-align center
      .arrow-icon
        font-size 20px
        margin-left -6px
</style>
