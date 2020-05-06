<template>
  <div class="user-list">
    <layout-header></layout-header>
    <div class="search">
      <el-input
        v-model="input"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="institution"
        label="供职单位"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="职位名称"
      >
      </el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="注册时间"
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
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<script>
import layoutHeader from '@/components/layout/layout-header.vue'
export default {
  name: 'userList',
  components: {
    layoutHeader
  },
  data() {
    return {
      input: '',
      tableData: [{
        institution: '深圳市南山区人民医院',
        name: '王小虎',
        title: '医师',
        tel: '1870931271',
        time: '2020-05-06'
      }, {
        institution: '深圳市南山区人民医院',
        name: '王小虎',
        title: '医师',
        tel:'1255',
        time: '2020-05-06'
      }, {
        institution: '深圳市南山区人民医院',
        name: '王小虎',
        title: '医师',
       tel:'12565655',
       time: '2020-05-06'
      }, {
        institution: '深圳市南山区人民医院3',
        name: '王小虎',
        title: '医师',
        tel:'654645645',
        time: '2020-05-06'
      }]
    }
  },
  methods: {
    deleteRow(index, rows) {
      console.log(index, rows)
    }
  },
}
</script>

<style scoped lang="less">
.user-list {
  position: relative;
  padding-top: 60px;
  .search {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
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