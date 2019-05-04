<template>
  <div>
    <div
      class="banner"
      @click="handleBannerClick">
      <img class="banner-img"
           src="https://imgs.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_640x360_7a8c23ac.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">平谷桃花海</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          3
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="imgs"
        v-if="showGallary"
        @close="handleGallaryClose"
      >
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://imgs.qunarzz.com/sight/p0/1904/7f/7fe202b7e0ebcd85a3.img.jpg_r_800x800_3e65b803.jpg',
        'http://imgs.qunarzz.com/sight/p0/1904/5d/5d42c64f998ebf47a3.water.jpg_r_800x800_8c63b7c1.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      console.log('click')
      this.showGallary = true
    },
    handleGallaryClose () {
      // console.log(this.showGallary)
      this.showGallary = false
      console.log('close')
      // console.log(this.showGallary)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    height 0
    padding-bottom 55%
    position relative

    .banner-img
      width 100%

    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      display flex
      color #fff
      margin-bottom -5px
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      padding-left 10px

      .banner-title
        flex 1
        font-size 18px
        height 35px
        line-height 35px

      .banner-number
        line-height 22px
        height 22px
        background rgba(0, 0, 0, .5)
        font-size 12px
        margin 5px 16px 0 0
        border-radius 12px
        padding 0 16px 0 16px

        .banner-icon
          font-size 14px
</style>
