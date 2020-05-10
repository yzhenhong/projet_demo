<template>
  <div class="task">
    <div>
      <p class="affirm">确认医院取号流程<span>￥10.00</span></p>
      <p class="award">深圳市南山区人民医院<span>任务奖励</span></p>
      <div class="line"></div>
      <p class="time">截止日期：2019/05/15</p>
    </div>
    <div class="bottom"></div>
    <div>
      <p class="affirm">确认医院取号流程<span>￥10.00</span></p>
      <p class="award">深圳市南山区人民医院<span>任务奖励</span></p>
      <div class="line"></div>
      <p class="time">截止日期：2019/05/15</p>
    </div>
    <div class="bottom"></div>
    <div>
      <p class="affirm">确认医院取号流程<span>￥10.00</span></p>
      <p class="award">深圳市南山区人民医院<span>任务奖励</span></p>
      <div class="line"></div>
      <p class="time">截止日期：2019/05/15</p>
    </div>
    <div class="bottom"></div>
    <div>
      <p class="affirm">确认医院取号流程<span>￥10.00</span></p>
      <p class="award">深圳市南山区人民医院<span>任务奖励</span></p>
      <div class="line"></div>
      <p class="time">截止日期：2019/05/15</p>
    </div>
    <div class="bottom"></div>
    <p class="load">加载更多</p>
    <button class="btnhome"><img
        src="../../assets\img\btn_home.svg"
        alt=""
      ></button>
  </div>
</template>

<script>
export default {
  name: 'task',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.affirm {
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #333333;
  line-height: 45px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  span {
    margin-right: 30px;
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #ff0000;
    text-align: right;
  }
}
.award {
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #666666;
  line-height: 40px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  span {
    margin-right: 30px;
  }
}
.time {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #999999;
  line-height: 33px;
  margin: 14px 0;
  span {
    margin-right: 30px;
  }
}
.line {
  border-bottom: 1px solid #dddddd;
}
.bottom {
  width: 100%;
  height: 12px;
  background: #dddddd;
}
.load {
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #666666;
  text-align: center;
  margin: 24px 0;
}
</style>
