<template>
  <div class="pagination">
    <div>pagination</div>
    <div @click="btn">子组件</div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    aa: {
      type: Number,
      default: 0,
      // required: false
    },
    background: {
      type: String,
      default: "#eee"
    }
  },
  data() {
    return {
      name: '胡逸云'
    }
  },
  created() {
    // console.log(this)
  },
  methods: {
    btn () {
      this.$emit('sonfun',this.name)
    }
  }
}
</script>

<style scoped lang="less">
.pagination{
  .div{
    margin-bottom: 50px;
  }
}
</style>
