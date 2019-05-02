<template>
<div class="container" @click="handleGalleryClick">
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) in imgs"
        :key="index">
        <img class="gallary-img"
             :src="item"
             alt=""/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true // 只要监听到了该组件或者父组件的dom结果发生变化就会自我刷新一次
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    left 0
    right 0
    top 0
    bottom 0
    background-color #000
    position fixed
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -25px
</style>
