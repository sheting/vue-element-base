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
        template(slot-scope="scope")
          i.el-icon-time
          | {{scope.row.date}}
      el-table-column(prop="name",label="姓名")
      el-table-column(prop="address1",label="家庭地址", show-overflow-tooltip)
      el-table-column(prop="address2",label="居住地址", show-overflow-tooltip)
      el-table-column(prop="address3",label="公司地址", show-overflow-tooltip)
      el-table-column(prop="tag", label="标签", width="100")
        template(slot-scope="scope")
          el-tag(:type="scope.row.tag === '家' ? 'primary' : 'success'", disable-transitions) {{scope.row.tag}}
      el-table-column(label="操作")
        template(slot-scope="scope")
          el-button(size="mini", @click="edit") 编辑
          el-button(size="mini", type="danger", @click="deleteRow") 删除
</template>

<script>
export default {
  name: 'tables',
  data () {
    return {
      tableData: [],
      pending: false,
      tagFilters: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }]
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
          address3: '北京市东城区环球贸易中心B座',
          tag: '家'
        },
        {
          date: '2019-02-18',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '公司'
        },
        {
          date: '2019-02-17',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '公司'
        },
        {
          date: '2019-02-16',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '家'
        },
        {
          date: '2019-02-15',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '公司'
        },
        {
          date: '2019-02-14',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '家'
        }]
      }, 3000)
    },
    filterTag (value, row) {
      return row.tag === value
    },
    edit () {
      this.$message({
        message: `编辑成功`,
        type: 'success'
      })
    },
    deleteRow () {
      this.$confirm(`此操作将删除该记录, 是否继续?`, `提示`, {
        confirmButtonText: `确定`,
        cancelButtonText: `取消`,
        type: 'warning'
      })
      .then(() => {
        this.$message({
          type: 'success',
          message: `删除成功`
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: `已取消删除`
        })
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style scoped lang="postcss">
</style>