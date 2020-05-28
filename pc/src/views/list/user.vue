<template>
  <div class="user-list">
    <layout-header></layout-header>
    <div class="search">
      <el-button type="primary" @click="addUser">新增用户</el-button>
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
        prop="hospitalName"
        label="供职单位"
      >
      </el-table-column>
      <el-table-column
        prop="userName"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="jobTitle"
        label="职位名称"
      >
      </el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
      >
      </el-table-column>
      <el-table-column
        prop="registrationTime"
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
      v-if="listTotal>0"
      background
      layout="prev, pager, next"
      :total="listTotal"
    >
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const {  mapState, mapActions } = createNamespacedHelpers("user")
import layoutHeader from '@/components/layout/layout-header.vue'
export default {
  name: 'userList',
  components: {
    layoutHeader
  },
  data() {
    return {
      listTotal: 0,
      input: '',
      tableData: []
    }
  },
  computed: {
    ...mapState([
      'userid',
      'token',
      'userName',
    ]),
  },
  methods: {
    deleteRow(index, rows) {
      console.log(index, rows)
    },
    getList() {
      this.$ajax.post('/api/user/usr_list').then(res => {
        console.log(res)
        this.tableData = res.data
        this.listTotal = res.data.length
      }).catch(err => {
        console.log(err)
      
      })
    },
    addUser () {
      this.$router.push('/add/user')
    }
  },
  created () {
    console.log('user-list页面：', this.$store.state.user.userName)
    console.log(this.userName)
    this.getList()
  }
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