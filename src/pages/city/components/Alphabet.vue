<template>
<div class="list">
  <div class="item">A</div>
  <div class="item">A</div>
  <div class="item">A</div>
  <div class="item">A</div>
  <div class="item">A</div>
  <div class="item">A</div>
  <div class="item">A</div>
  <div class="item">A</div>
  <div class="item">A</div>
</div>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 200px
    right 0
    width 20px
    .item
      text-align center
      color $bgColor
      height 20px
</style>
