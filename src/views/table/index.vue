<template lang="pug">
  el-card
    el-table(
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading="pending"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)")
      el-table-column(type="selection", width="55")
      el-table-column(label="日期")
        template(slot-scope="scope") {{scope.row.date}}
      el-table-column(prop="name",label="姓名")
      el-table-column(prop="address1",label="家庭地址", show-overflow-tooltip)
      el-table-column(prop="address2",label="居住地址", show-overflow-tooltip)
      el-table-column(prop="address3",label="公司地址", show-overflow-tooltip)
</template>

<script>
export default {
  name: 'tables',
  data () {
    return {
      tableData: [],
      pending: false
    }
  },
  methods: {
    getData () {
      this.pending = true
      setTimeout(() => {
        this.pending = false
        this.tableData = [{
          date: '2019-02-19',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座'
        },
        {
          date: '2019-02-18',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座'
        },
        {
          date: '2019-02-17',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座'
        },
        {
          date: '2019-02-16',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座'
        },
        {
          date: '2019-02-15',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座'
        },
        {
          date: '2019-02-14',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座'
        }]
      }, 3000)
    }
  },
  mounted() {
    this.getData()
  },
}
</script>
<style scoped lang="postcss">
</style>