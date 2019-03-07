<template lang="pug">
el-card
  el-row(:gutter="20")
    el-col.chart-item(:span="8")
      el-card
        div(slot="header")
          span 基础折线图
        div test
    el-col.chart-item(:span="8")
      el-card
        div(slot="header")
          span 双折线图
        div test
    el-col.chart-item(:span="8")
      el-card
        div(slot="header")
          span 基础柱状图
        div test
    el-col.chart-item(:span="8")
      el-card
        div(slot="header")
          span 堆叠柱状图
        div test
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'chart-component',
  components: {}
})
export default class ChartComponent extends Vue {
}
</script>
<style scoped lang="postcss">
.chart-item{background-color: #fff;margin-bottom: 20px;}
</style>
