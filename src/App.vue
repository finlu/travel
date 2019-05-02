<template>
  <div id="app">
    <keep-alive>
<!-- 将页面中的数据调入内存中，不需要重新发ajax请求 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
