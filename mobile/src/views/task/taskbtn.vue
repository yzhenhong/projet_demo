<template>
  <div class="taskbtn">
    <p>任务名称：确认医院取号流程</p>
    <p>任务奖励：<span>￥10.00</span></p>
    <p>截止时间：2019/10/15 23:59:59</p>
    <p>任务详情：</p>
    <p class="mid">1. 确认医院取号流程，确认医院取号流程，确认医院取号流程，确认医院取号流程</p>
    <p>2. 确认医院取号流程，确认医院取号流程，确认医院取号流程，确认医院取号流程</p>
    <div class="background"></div>
    <p>3. 确认医院取号流程，确认医院取号流程，确认医院取号流程，确认医院取号流程</p>
    <div class="btn">
      <div
        @click="btnsave"
        class="btnsave"
      >保存草稿</div>
      <div
        @click="btnsubmit"
        class="btnsubmit"
      >提交审核</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'taskbtn',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    btnsave() {
      console.log(1)
    },
    btnsubmit() {
      console.log(2)
    }
  }
}
</script>

<style scoped lang="less">
.taskbtn {
  font-family: PingFangSC-Regular;
  font-size: 15px;
  color: #333333;
  line-height: 46px;
}
.taskbtn p {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: #333333;
}
.mid {
  font-family: PingFangSC-Regular;
  font-size: 15px;
  color: #333333;
  line-height: 46px;
  margin-bottom: 30px;
}

.background {
  width: 690px;
  height: 324px;
  background: #d8d8d8;
  margin: 10px 0;
}
p span {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: #ff0000;
  text-align: right;
}
.btn {
  display: flex;
  justify-content: center;
  line-height: 90px;
  position: absolute;
  bottom: 0;
  width: 750px;
}
.btnsave {
  width: 50%;
  height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #333333;
  text-align: center;
}
.btnsubmit {
  width: 50%;
  height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  background: #007ded;
}
p{
  margin-bottom: 10px;
}
</style>
