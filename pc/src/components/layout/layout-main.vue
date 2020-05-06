<template>
  <div class="layout-main">
    <layout-header wd='100px'></layout-header>
    <router-view class="layoutMainVue-router-view"/>
  </div>
</template>

<script>
import layoutHeader from './layout-header.vue'
export default {
  name: 'layout-main',
  components:{
    layoutHeader
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.layout-main{
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 60px;
  .layoutMainVue-router-view{
    background: #ffffff;
    width: 100%;
    height: 100%;
  }
}
</style>
