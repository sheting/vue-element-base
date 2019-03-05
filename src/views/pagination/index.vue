<template>
  <el-row class="pagination">
    <el-col :span="24">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        @prev-click="prevClick"
        @next-click="nextClick"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'pagination'
})
export default class PaginationComponent extends Vue {
  private currentPage: number = 1

  handleSizeChange (val:any):void {
    console.log(`每页 ${val} 条`)
  }
  handleCurrentChange (val:any):void {
    console.log(`当前页: ${val}`)
  }
  prevClick(val:any):void {
    console.log(val)
  }
  nextClick(val:any):void {
    console.log(val)
  }
}
</script>

<style scoped>
.pagination{
    text-align: center
}
</style>