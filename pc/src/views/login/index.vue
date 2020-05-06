<template>
  <div class="login-index">
    <div>
      <div class="til">登录</div>
      <el-form
        ref="form"
        :model="form"
      >
        <el-form-item>
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
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
export default {
  name: 'login-index',
  data() {
    return {
      form: {
        name: '',
        password: '',
      }
    }
  },
  created () {
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form)
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
