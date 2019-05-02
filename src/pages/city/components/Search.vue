<template>
  <div>
    <div class="search">
      <input v-model="keyWord" type="text" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="this.keyWord">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in result"
          :key="item.id">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-if="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Becroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.becroll = new Becroll(this.$refs.search)
  },
  props: {
    cities: Object
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.city) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord > -1)) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
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
