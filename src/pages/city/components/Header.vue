<template>
<div>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    color #fff
    text-align center
    background-color $bgColor
    .header-back
      position absolute
      width 32px
      top 0
      left 0
      right 0
      text-align center
      color #fff

</style>
