<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index">
        <div class="icon"
             v-for="icon in page"
             :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content"
                 :src="icon.imgUrl"
                 alt="">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false // 控制轮播图不自动滚动
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%

  .icons
    margin-top 10px

    .icon
      position relative
      overflow hidden
      float: left
      width 25%
      padding-bottom 25%
      height 0

      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom 22px

        .icon-img-content
          display block
          margin 0 auto
          height 100%

      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height 22px
        line-height 22px
        color $darkTextColor
        text-align center
        ellipsis()
</style>
