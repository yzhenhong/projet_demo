<template>
  <div class="task-list">
    <layout-header></layout-header>
    <div class="search">
      <el-button type="primary">创建任务</el-button>
      <div>
        省市
        <el-select v-model="fromData.province" placeholder="请选择省市">
          <el-option label="江西省" value="360121"></el-option>
          <el-option label="广东省" value="123456"></el-option>
        </el-select>
         任务状态
        <el-select v-model="fromData.status" placeholder="请选择任务状态">
          <el-option label="全部" value="0"></el-option>
          <el-option label="状态1" value="1"></el-option>
          <el-option label="状态2" value="2"></el-option>
          <el-option label="状态3" value="3"></el-option>
        </el-select>
          验证通过
        <el-select v-model="fromData.verification" placeholder="请选择验证状态">
          <el-option label="全部" value="0"></el-option>
          <el-option label="通过" value="1"></el-option>
          <el-option label="未通过" value="2"></el-option>
        </el-select>
        <el-input
          v-model="fromData.keyword"
          placeholder="输入关键词查询"
        ></el-input>
        <el-button type="primary" @click="search">查询</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="task"
        label="任务名称"
      >
      </el-table-column>
      <el-table-column
        prop="hospital"
        label="所属医院"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="截至时间"
      >
      </el-table-column>
      <el-table-column
        prop="state"
        label="任务状态"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="领取人"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="listTotal>0"
      background
      layout="prev, pager, next"
      :total="listTotal"
    >
    </el-pagination>
  </div>
</template>

<script>
import layoutHeader from '@/components/layout/layout-header.vue'
export default {
  name: 'taskList',
  components: {
    layoutHeader
  },
  data() {
    return {
      fromData:{
        province: '',
        status: '0',
        verification:'0',
        keyword: '',
      },
      listTotal: 100,
      tableData: [
        {
          task: '确认医院取号流程',
          hospital: '深圳市蛇口人民医院',
          time: '2019/09/19',
          state: '未发布',
          name: '李小明'
        }, {
          task: '确认医院取号流程',
          hospital: '深圳市蛇口人民医院',
          time: '2019/09/19',
          state:'未发布',
          name: '李小明'
        }, {
          task: '确认医院取号流程',
          hospital: '深圳市蛇口人民医院',
          time: '2019/09/19',
        state:'未发布',
        name: '李小明'
        }, {
          task: '确认医院取号流程',
          hospital: '深圳市蛇口人民医院',
          time: '2019/09/19',
          state:'未发布',
         name: '李小明'
        }
      ]
    }
  },
  methods: {
    search () {
      console.log(this.fromData)
    },
    deleteRow(index, rows) {
      console.log(index, rows)
    }
  },
}
</script>

<style scoped lang="less">
.task-list {
  position: relative;
  padding: 0px 10px;
  padding-top: 60px;
  .search {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search /deep/.el-input {
    width: 220px;
    height: 34px;
    margin-right: 20px;
    border-radius: 2px;
   
  }
  .search /deep/.el-button {
    width: 100px;
    height: 34px;
    
  }
  /deep/.el-table{
    margin-top: 20px;
    .cell{
      text-align: center;
    }
    th{
      background: #F8F8F8;
    }
  }
  /deep/.el-pagination{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>