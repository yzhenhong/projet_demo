<template>
  <div class="user-admin">
    <layout-header></layout-header>
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
    >
      <el-form-item label="供职单位" >
        <el-input v-model="form.danwei"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="form.password2"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.password2"></el-input>
      </el-form-item>
      <el-form-item class="btn-box">
        <el-button  type="primary" plain>取消</el-button>
        <el-button
          type="primary"
          @click="onSubmit"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        danwei:'深圳市南山区人民医院',
        password: '',
        password2: '',
      }
    }
  },
  components: {
    layoutHeader
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
  margin-top: 100px;
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
