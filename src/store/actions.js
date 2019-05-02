// 存放一些action，可以是异步的方法
export default {
  changeCity (ctx, city) {
    ctx.commit('changeCity', city)
  }
}
