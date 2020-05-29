<template>
  <div class="earnings">
    <el-row>
      <el-col :span="7">
        <el-select
          class="el-select"
          v-model="time"
          placeholder="获取时间"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-date-picker
          v-model="calendar"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="7">
        省市
        <el-select
          class="el-select"
          v-model="province "
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        任务状态
        <el-select
          class="el-select"
          v-model="task"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        验证通过
        <el-select
          class="el-select"
          v-model="verification"
          placeholder="全部"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          class="el-keyCode"
          v-model="input"
          placeholder="输入关键词查询"
        ></el-input>
        <el-button type="primary">查询 </el-button>
      </el-col>
    </el-row>
    <div class="table-box">
      <div class="title">收益数据查询汇总</div>
      <el-table
        border
        :data="tableData1"
        style="width: 100%"
      >
        <el-table-column
          prop="earnings"
          label="累计收益"
          width="280"
        >
        </el-table-column>
        <el-table-column
          prop="award"
          label="任务奖励"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="shareBonuses"
          label="分成奖励"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="issued"
          label="已发放"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="stayOut"
          label="待发放"
          width="200"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200"
        >
          <template slot-scope="scope">
            <el-button
              @click="confirmToIssue(scope.row)"
              type="text"
              size="small"
            >查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="table-box">
      <div class="title">收益列表</div>
      <el-table
        border
        :data="tableData2"
        style="width: 100%"
      >
        <el-table-column
          prop="province"
          label="省份"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="城市"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="wechatId"
          label="微信号"
          width="140"
        >
        </el-table-column>
        <el-table-column
          prop="revenueType"
          label="收益类型"
          width="140"
        >
        </el-table-column>
        <el-table-column
          prop="incomeAmount"
          label="收益金额"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="acquisitionTime"
          label="获取时间"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="issuingState"
          label="发放状态"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="provideTime"
          label="发放时间"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const {  mapState, mapActions } = createNamespacedHelpers("user")
export default {
  name: 'earnings',
  data() {
    return {
      time: '',
      calendar: '',
      province: '',
      input: '',
      task: '',
      verification: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      },],
      tableData1: [{
        earnings: '100',
        award: '100',
        shareBonuses: '100',
        issued: '100',
        stayOut: '100',
      }],
      listTotal: 0,
      tableData2: []
    }
  },
  computed: {
    ...mapState([
      'userid',
      'token',
      'userName',
    ]),
  },
  created() {
    console.log('earnings-list页面：', this.$store.state.user)
    this.getEarnings()
  },
  methods: {
    confirmToIssue(scope) {
      console.log(scope)
    },
    getEarnings() {
      this.$ajax.post('/api/earnings/earnings_list').then(res => {
        // console.log('收益列表接口res',res)
        this.tableData2 = res.data
        this.listTotal = res.data.length
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style scoped lang="less">
.earnings {
  /deep/ .cell{
    text-align: center;
  }
  padding: 0px 80px;
  padding-top: 40px;
  .el-select/deep/ .el-input__inner {
    width: 140px;
  }
  /deep/.el-date-editor {
    width: 240px;
  }
  .el-keyCode {
    width: 220px;
  }
}
.table-box {
  margin-top: 30px;
  margin-bottom: 30px;
  .title {
    font-size: 16px;
    color: #333333;
    margin-bottom: 20px;
  }
  /deep/th {
    background: #f8f8f8;
  }
}
</style>
