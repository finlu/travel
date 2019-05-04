<template>
  <div class="wrapper">
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="item-title">
        <span class="item-title-icon">
          {{item.title}}
        </span>
      </div>
      <div
        class="item-children"
        v-if="item.children"
      >
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    margin-top 10px
    .item-title
      line-height 40px
      font-size 14px
      padding 0 0 0 5px
    .item-children
      padding 0 10px
</style>
