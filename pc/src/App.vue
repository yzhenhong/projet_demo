<template>
  <div id="app">
    <router-view  class="appVue-router-view"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
  }
}
</script>

<style lang="less">
@import './assets/css/common.less';
@import './assets/css/reset.css';
   #nprogress .bar {
    background: @blue-color!important; //自定义颜色
  }
</style>