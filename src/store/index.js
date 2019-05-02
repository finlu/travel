import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // 类似于组件中的计算属性
  getters: {
    doubleCity () {
      return state.city + ' ' + state.city
    }
  }
})
