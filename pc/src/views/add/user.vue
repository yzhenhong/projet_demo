<template>
  <div class="addUser">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="供职单位">
        <el-input v-model="form.hospitalName"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="职位名称">
        <el-input v-model="form.jobTitle"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-date-picker
          v-model="form.registrationTime"
          type="date"
          format="yyyy年MM月dd日"
          value-format="yyyy年MM月dd日"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button  @click="onCan">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'addUser',
  data() {
    return {
      form: {
        hospitalName: '',
        userName: '',
        jobTitle: '',
        tel: '',
        registrationTime: '',
      }
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
      console.log('submit!',this.form);
      if(!this.form.hospitalName || !this.form.userName ||!this.form.jobTitle ||!this.form.tel ||!this.form.registrationTime){
        this.$message({
          message: '请填写完整',
        });
        return false
      }
       this.$ajax.post('/api/user/add_user',this.form).then(res => {
        console.log(res)
        this.$message({
          message: '成功',
          type: 'success'
        });
        this.$router.go(-1)
      }).catch(err => {
        console.log(err)
      })
    },
    onCan () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
</style>
