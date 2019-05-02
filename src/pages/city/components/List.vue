<template>
  <div class="list" ref="wrapper">
    <!--  让list中的内容绝对定位，且高度不随着内容撑开，之后使用插件完成类似app的拖拽效果  -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
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
            @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) in cities"
        :key="key">
        <div
          class="title border-topbottom"
          :ref="key">
          {{ key }}
        </div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city' // 将state中的city属性映射到当前对象的currentCity计算属性上
    })
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
  },
  methods: {
    handleCityClick (city) {
      // 方法1：需要在store中配置action和mutations
      // this.$store.dispatch('changeCity', city) // 将city变量传递给store对象中的changeCity的action
      // 方法2：只需要配置mutations
      // this.$store.commit('changeCity', city)
      // 通过mapMutations高级api将store中的mutations中的方法映射到当前组件中的methods对象中
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
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
