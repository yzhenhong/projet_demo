<template>
  <div class="login-index">
    <div>
      <div class="til" ref="til">登录</div>
      <el-form
        ref="form"
        :model="form"
      >
        <el-form-item>
          <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="btn-box" @click="onSubmit">
          登陆
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const {  mapState, mapActions } = createNamespacedHelpers("user")
export default {
  name: 'login-index',
  data() {
    return {
      tirm: '',
      form: {
        userName: '',
        password: '',
      }
    }
  },
  computed: {
    ...mapState([
      'userid',
      'token',
      'userName',
    ]),
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
    this.tirm = setInterval(()=>{
      console.log('定时器')
    },10000)
  },
  beforeMount () {
    console.log('beforeMount',this.$refs)
  },
  mounted () {
    console.log('mounted',this.$refs)
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    clearInterval(this.tirm) 
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    ...mapActions([
      'setUserId',
      'setToken',
      'setUserName',
    ]),
    onSubmit() {
      this.form.userName = 11111
      // this.$store.dispatch('user/setUserName',this.form.userName)
      // this.setUserName(this.form.userName)
      // this.$router.push('/list/user')

      // this.$ajax.post('/api/account/login_account',this.form).then(res=>{
      //   // console.log(res)
      //   this.$store.dispatch('user/setToken', res.data.token)
      //   // this.setToken(res.data.token)
      //   this.$router.push('/list/user')
      // }).catch(err=>{
      //   console.log(err)
      // })
    }
  }
}
</script>

<style scoped lang="less">
   
.login-index{
  background: #eee!important;
  padding-top: 160px;
  >div{
    width: 380px;
    height: 327px;
    margin: 0 auto;
    padding-top: 30px;
    background: #ffffff;
    .til{
      width: 100%;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #333333;
      text-align: center;
      margin-bottom: 30px;
    }
    /deep/.el-input{
      border-radius: 2px;
    }
    .el-form{
      width: 100%;
      .el-form-item{
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
        width: 280px;
      }
      .btn-box{
        width: 280px;
        height: 40px;
        margin: 0 auto;
        color: #ffffff;
        background: #3085FF;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}


</style>
