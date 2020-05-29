<template>
  <div class="route">
    route
    <div @click="route1">route跳转1</div>
    <div @click="route2">route跳转2</div>
    <div @click="route3">route跳转3</div>


    <div @click="route4">route跳转4</div>


    
    <!-- <router-link :to="{name:'home'}">router-link跳转5</router-link> -->


  </div>
</template>

<script>
export default {
  name: 'route',
  data() {
    return {
      name:'胡逸云'
    }
  },
  components:{
  },
  created() {
  },
  mounted () {
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('beforeRouteEnter')
    next ()
  },
  
  methods: {
    route1 () {
      this.$router.push('/home/index?name=胡逸云&age=20&sex=男')
      this.$router.push({ 
        path:'/home/index',
        query: {
          name: '胡逸云',
          age: '20',
          sex: '男',
        }
      })


    
    },
    route2 () {
       this.$router.push({ 
        name:'home',
        params: {
          name: '胡逸云'
        }
      })
    },
    route3 () {
      this.$router.replace('/home/index?name=胡逸云&age=20&sex=男')
    },
    route4 () {
      this.$router.go(1) 
    }
  }
}
</script>

<style scoped lang="less">
.route{
  padding: 20px;
  >div{
    margin-top: 20px;
  }
}
</style>
