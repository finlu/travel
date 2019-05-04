<template>
<div>
  <detail-banner></detail-banner>
  <detail-header></detail-header>
  <div class="content">
    <detail-list :list="list"></detail-list>
  </div>
</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    // axios.get('/api/detail.json?id=' + this.$route.params.id)
    axios.get('/api/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then(this.handleDetailInfo)
  },
  methods: {
    handleDetailInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
      }
    }
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票-某连锁店'
                }
              ]
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 800px
</style>
