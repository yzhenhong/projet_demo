<template>
  <div class="home">
    home
  </div>
</template>

<script>
import ajax from '@/utils/ajax'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  created() {
    // //get1
    // this.$ajax.get('/api/get?name=胡逸云&sex=男')
    // //get2
    // this.$ajax.get('/api/get',{
    //   params: {
    //       name: '胡逸云',
    //       sex: '男'
    //   }
    // })
    // //  post
    // this.$ajax.post('/api/post',{
    //   name: '胡逸云',
    //   sex: '男'
    // })
    
    ajax.get('/api/get?name=胡逸云&sex=男')
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
