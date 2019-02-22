<template lang="pug">
.table
  el-card.table-filter
    el-form.filter-form(ref="form", :model="form", label-width="80px")
      el-row(:gutter="10")
        el-col(:xs="24" :sm="24" :md="12" :lg="6" :xl="6")
          el-form-item(label="姓名:", prop="name")
            el-input(v-model="form.name")
        el-col(:xs="24" :sm="24" :md="12" :lg="6" :xl="6")
          el-form-item(label="家庭地址:", prop="address1")
            el-input(v-model="form.address1")
        el-col(:xs="24" :sm="24" :md="12" :lg="6" :xl="6")
          el-form-item(label="居住地址:", prop="address2")
            el-input(v-model="form.address2")
        el-col(:xs="24" :sm="24" :md="12" :lg="6" :xl="6")
          el-form-item(label="公司地址:", prop="address3")
            el-input(v-model="form.address3")
        el-col(:xs="24" :sm="24" :md="12" :lg="6" :xl="6")
          el-form-item(label="标签:", prop="tag")
            el-select(v-model="form.tag", placeholder="请选择标签")
              el-option(v-for="(type, index) in tagFilters", :key="index", :label="type.text", :value="type.value")
        el-col(:xs="24" :sm="24" :md="12" :lg="6" :xl="6")
          el-form-item(label="日期:", prop="date1")
            el-date-picker(v-model="form.date1", type="date", value-format="yyyy-MM-dd", placeholder="选择日期")
        el-col(:span="24")
          el-col.text-center(:span="12" :offset="6")
            el-button(type="primary", size="small", @click="doSearch", round) 查询
            el-button(size="small", @click="resetForm", round) 重置
  el-card
    .batch-operation
      el-button(size="mini", type="danger") 批量删除
      el-button(size="mini", type="warning") 批量修改
    el-table(
      ref="multipleTable"
      :data="tableData"
      :default-sort = "{prop: 'date', order: 'descending'}"
      height="450"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading="pending"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)")
      el-table-column(type="selection", width="55")
      el-table-column(prop="date", label="日期", sortable)
        template(slot-scope="scope")
          i.el-icon-time
          | {{scope.row.date}}
      el-table-column(prop="name",label="姓名")
      el-table-column(prop="address1",label="家庭地址", show-overflow-tooltip)
      el-table-column(prop="address2",label="居住地址", show-overflow-tooltip)
      el-table-column(prop="address3",label="公司地址", show-overflow-tooltip)
      el-table-column(prop="tag", label="标签", width="100", :filters="tagFilters" :filter-method="filterTag" filter-placement="bottom-end")
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
      tagFilters: [{ text: `家`, value: `家`, key: `home`}, { text: `公司`, value: `公司`, key: `company`}],
      form: {
        name: '',
        tag: '',
        date1: '',
        address1: '',
        address2: '',
        address3: ''
      }
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
        },
        {
          date: '2019-02-13',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '公司'
        },
        {
          date: '2019-02-12',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '公司'
        },
        {
          date: '2019-02-11',
          name: '智小链',
          address1: '北京市链块区链块路1024号',
          address2: '北京市链块区链块路1024号',
          address3: '北京市东城区环球贸易中心B座',
          tag: '家'
        }]
      }, 500)
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
    },
    doSearch () {
      this.$message({
        message: `查询成功`,
        type: 'success'
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style scoped lang="postcss">
.table-filter{margin-bottom: 20px;}
.text-center{text-align: center;}
.batch-operation{padding: 0 0 10px 0;}
.filter-form{
  & .el-input,
  & .el-select{
    width: 100%;max-width: 350px;
  }
}
</style>