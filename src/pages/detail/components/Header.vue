<template>
<div>
  <router-link
    tag="div"
    to="/"
    class="header-abs"
    v-show="showAbs"
  >
    <div class="iconfont header-abs-back">&#xe624;</div>
  </router-link>
  <div
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle">
    城市选择
    <router-link to="/">
      <div class="iconfont header-fixed-back">&#xe624;</div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity >= 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll) // 对window全局变量进行绑定，不仅仅在组件内有效
  },
  deactivated () {
    // 组件被隐藏的时候触发
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header-fixed
    position fixed
    left 0
    top 0
    right 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    color #fff
    text-align center
    background-color $bgColor
    .header-fixed-back
      position absolute
      width 32px
      top 0
      left 0
      right 0
      text-align center
      color #fff
  .header-abs
    left 20px
    top 20px
    width 22px
    height 22px
    line-height 22px
    border-radius 50%
    position absolute
    background-color rgba(0,0,0,.8)
    text-align: center
    .header-abs-back
      color #fff
      font-size 8px
</style>
