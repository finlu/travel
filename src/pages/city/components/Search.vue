<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height 35px
    background-color $bgColor
    padding 0 5px
    .search-input
      width 100%
      height 30px
      line-height 30px
      text-align center
      border-radius 3px
      font-size 12px
      color #666
</style>
