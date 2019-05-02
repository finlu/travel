<template>
  <div class="list" ref="wrapper">
    <!--  让list中的内容绝对定位，且高度不随着内容撑开，之后使用插件完成类似app的拖拽效果  -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            ref="key">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) in cities"
        :key="key">
        <div class="title border-topbottom" :ref="key">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element) // 滑动到指定元素
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc

    &:after
      border-color: #ccc

  .border-bottom
  &:before
    border-color #ccc

  .list
    overflow hidden
    position absolute
    top 78px
    left 0
    right 0
    bottom 0

    .title
      line-height 27px
      background-color #eee
      color #ccc
      font-size 14px
      padding-left 5px

    .button-list
      overflow hidden
      padding 4px 24px 4px 4px

      .button-wrapper
        float left
        width 33.33%

        .button
          margin 5px
          text-align center
          border: 1px solid #ccc
          border-radius 3px
          padding 5px 0

    .item-list
      .item
        line-height 30px
        padding-left 5px
</style>
