<template>
  <div class="home">
    <div class="head">
      <img src="../../assets/img/head portrait.png" alt="">
      <div>
        <div class="name">李夏明</div>
        <div>深圳市南山区人民医院深圳市南山区人民医院</div>
      </div>
    </div>
    <div class="btn-box">
      <img src="../../assets/img/btn_lqrw.svg" alt="">
      <img src="../../assets/img/btn_rwjl.svg" alt="">
    </div>
    <div class="list">
      <div class="title">
        <div>
          <img src="../../assets/img/icon_dcl.svg" alt="">
          待处理任务
        </div>
        <div>
          查看更多 >
        </div>
      </div>
      <div class="list-item" v-for="(item,index) in 3" :key="index">
        <p>
          <span>确认医院取号流程</span>
          <span>￥10.00</span>
        </p>
        <p>
          <span>截止时间：2019/05/15 15:29:57</span>
          <span>任务奖励</span>
        </p>
      </div>
    </div>
    <div class="list">
      <div class="title">
        <div>
          <img src="../../assets/img/icon_ywc.svg" alt="">
          已完成任务
        </div>
        <div>
          查看更多 >
        </div>
      </div>
      <div class="list-item complete" v-for="(item,index) in 3" :key="index">
        <div>
          <div>确认医院取号流程</div>
          <div>截止时间：2019/05/15 15:29:57</div>
        </div>
        <img src="../../assets/img/icon_ywc.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
.home {
  font-size: 24px;
  background: #eeeeee;

}
.head{
  height: 110px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  background: #FFFFFF;
  box-shadow: 0 4px 4px 0 rgba(160,160,160,0.10);
  >img{
    width: 80px;
    height: 80px;
    margin-right: 30px;
  }
  >div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    >div:first-child{
      width: 90px;
      margin-right: 40px;
      font-size: 30px;
      color: #333333;
      line-height: 40px;
    }
    >div:last-child{
      flex: 1;
      line-height: 34px;
      font-size: 24px;
      color: #999999;
      line-height: 34px;
    }
  }
}
.btn-box{
  background: #FFFFFF;
  height: 189px;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  >img{
    width: 330px;
    height: 100px;
  }
}
.list{
  background: #FFFFFF;
  padding-left: 30px;
  margin-bottom: 20px;
  >.title{
    padding-top: 32px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    >div{
      height: 48px;
      display: flex;
      align-items: center;
    }
    img{
      width: 36px;
      height: 36px;
      margin-right: 15px;
    }
  }
  .list-item{
    height: 165px;
    border-bottom: 1px solid #eeeeee;
    padding-top: 40px;
    padding-right: 30px;
    >p{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    >p:first-child{
      height: 42px;
      margin-bottom: 10px;
    }
    >p:last-child{
      height: 33px;
    }
  }
  .list-item:last-child{
    border: none;
  }
  .complete{
    display: flex;
    justify-content: space-between;
    >div{
      >div:first-child{
        height: 42px;
        margin-bottom: 10px;
      }
      >div:last-child{
        height: 33px;
      }
    }
    img{
      width: 94px;
      height: 94px;
    }
  }
}
</style>
