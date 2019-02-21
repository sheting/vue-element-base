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

<script>
export default {
  name: "pagination",
  data() {
    return {
      cneter:'cneter',
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    prevClick(val) {
      console.log(val);
    },
    nextClick(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.pagination{
    text-align: center
}
</style>