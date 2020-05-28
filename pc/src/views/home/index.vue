<template>
  <div class="home">
    我是：{{name}}，年龄：{{age}}，性别：{{sex}}


    <div @click="back">返回</div>
    <div @click="back">返回</div>
    <pagination :aa='listTotal' background='#fff' @sonfun='parentfun'></pagination>


    <div id="hyy" ref='hyy'></div>

  </div>
</template>

<script>
import $ from "jquery";
import pagination from '@/components/pagination.vue'
import ajax from '@/utils/ajax'
export default {
  name: 'home',
  data() {
    return {
      name: '',
      age: '',
      sex: '',
      listTotal: 5,
      input: '',
      tableData: []
    }
  },
  components:{
    pagination
  },
  mounted () {
    // console.log(document.getElementById('hyy'))
    // console.log(this.$refs.hyy)
    console.log($("#hyy"))
  },
  created() {
    // console.log(this.$route)
    // this.name = this.$route.query.name
    // this.age = this.$route.query.age
    // this.sex = this.$route.query.sex
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
    
    // ajax.get('/api/get?name=胡逸云&sex=男')
  },
  methods: {
    parentfun (val) {
      console.log(val)
    },
    back  () {
      this.$router.go(-1) 
    }
  }
}
</script>

<style scoped lang="less">
</style>
