<template>
  <div class="modify-password">
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
    >
      <el-form-item label="原登陆密码" >
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="密码确认">
        <el-input v-model="form.password2"></el-input>
      </el-form-item>
      <el-form-item class="btn-box">
        <el-button
          type="primary"
          @click="onSubmit"
        >确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'modify-password',
  data() {
    return {
      form: {
        password: '',
        password2: '',
      }
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form)
    }
  }
}
</script>

<style scoped lang="less">
/deep/.el-form {
  margin: 0 auto;
  margin-top: 30px;
  width: 500px;
  height: 346px;
  /deep/.el-form-item__label {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    text-align: right;
    width: 100px;
  }
  /deep/.el-form-item__content {
    width: 370px;
  }
  .btn-box{
    width: 100%;
    /deep/.el-form-item__content{
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
