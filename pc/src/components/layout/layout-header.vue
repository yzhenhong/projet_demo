<template>
  <div class="layout-header">
    <div>
      <div class="img-box">
        <img src="@/assets/svg/logo.svg" alt="">
      </div>
      <div>众包平台管理后台</div>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1" @click="task">任务管理</el-menu-item>
      <el-menu-item index="2" @click="user">用户管理</el-menu-item>
      <el-menu-item index="3" @click="earnings">收益管理</el-menu-item>
      <el-menu-item index="4" @click="login">登录</el-menu-item>
    </el-menu>
    <div>
      <el-dropdown  @command="handleCommand">
        <span class="el-dropdown-link">
          Admin<img src="@/assets/svg/pulldown.svg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="modify-password">修改密码</el-dropdown-item>
          <el-dropdown-item command="secede">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-header',
  data() {
    return {
      activeIndex: '1'
    }
  },
  props: {
    wd: {
      type: String,
      default: '80px'
    }
  },
  created() {
    if(sessionStorage.getItem('activeIndex')){
      this.activeIndex = sessionStorage.getItem('activeIndex');
    }
  },
  methods: {
    task() {
      sessionStorage.setItem('activeIndex', JSON.stringify(1));
      if(this.$route.path!='/list/task'){
        this.$router.push('/list/task')
      }
    },
    user() {
      sessionStorage.setItem('activeIndex', JSON.stringify(2));
      if(this.$route.path!='/list/user'){
        this.$router.push('/list/user')
      }
    },
    earnings() {
      sessionStorage.setItem('activeIndex', JSON.stringify(3));
       if(this.$route.path!='/list/earnings'){
        this.$router.push('/list/earnings')
      }
    },
    login() {
      sessionStorage.setItem('activeIndex', JSON.stringify(4));
       if(this.$route.path!='/login/login-index'){
        this.$router.push('/login/login-index')
      }
    },
    handleCommand(command) {
      if(command=='modify-password') {
        this.$router.push('/login/modify-password')
      } else {
        this.$router.push('/login/login-index')
      }
    }
  }
}
</script>

<style scoped lang="less">
.layout-header {
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 60px;
  background: #323232;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  >div{
    height: 100%;
  }
  >div:first-child{
    min-width: 184px;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #FFFFFF;
    .img-box{
      width: 34px;
      height: 34px;
      margin-right: 10px;
      border-radius: 50%;
      background: #ffffff;
      img{
        width: 30px;
        height: 30px;
      }
    }
  }
  .el-menu-demo{
    flex: 1;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #C0C0C0;
    text-align: center;
    justify-content: center;
    background: #323232;
    .el-menu-item.is-active{
      background: #323232;
      color: #C0C0C0;
    }
    .el-menu-item:hover{
      background: #323232;
    }
  }
   >div:last-child{
    height: 100%;
    display: flex;
    align-items: center;
    opacity: 0.9;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #999999;
    text-align: right;
    img{
      margin-left: 15px;
    }
  }
}
</style>
