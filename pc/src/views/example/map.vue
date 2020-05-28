<template>
  <div class="map">
    <div id="allmap" ref="allmap"></div>
  </div>
</template>

<script>
export default {
  name: 'map',
  data() {
    return {
    }
  },
  components:{
  },
  created() {
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      // 百度地图API功能
      var map = new BMap.Map("allmap");    
      map.enableScrollWheelZoom();                 //启用滚轮放大缩小   
      map.centerAndZoom(new BMap.Point(116.4035,39.915),8); 
      setTimeout(function(){
        map.panTo(new BMap.Point(113.262232,23.154345));   //两秒后移动到广州
      }, 2000);
    }
  }
}
</script>

<style scoped lang="less">
#allmap {width: 100%;height: 600px;overflow: hidden;margin:0;font-family:"微软雅黑";}
</style>
