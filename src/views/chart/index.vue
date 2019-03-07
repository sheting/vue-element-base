<template lang="pug">
el-card
  el-row(:gutter="20")
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 基础折线图
          .card-title-action
            el-button(type="text", @click="updateBaseLine", icon="el-icon-refresh") 刷新
        base-line(:data="baseLineData")
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 双折线图
        div test
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 基础柱状图
        base-bar(:data="baseBarData")
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 堆叠柱状图
        div test
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import baseLine from '@/components/charts/base-line.vue'
import baseBar from '@/components/charts/base-bar.vue'

@Component({
  name: 'chart-component',
  components: {baseLine, baseBar}
})
export default class ChartComponent extends Vue {
  private baseLineData: object[] = []
  private baseBarData: object[] = []

  updateBaseLine () {
    const mockBaseLine = []
    for (let i = 0; i < 6; i++) {
      const obj = {
        year: 2000 + i,
        value: Math.floor(Math.random() * 10 + 1)
      }
      mockBaseLine.push(obj)
    }
    this.baseLineData = mockBaseLine.slice(0)
  }
  updateBaseBar () {
    const mockBaseBar = []
    const types = [`家具家电`, `粮油副食`, `生鲜水果`, `美容洗护`, `母婴用品`, `家庭清洁`]
    for (let i = 0; i < 6; i++) {
      const obj = {
        type: types[i],
        value: Math.floor(Math.random() * 100000)
      }
      mockBaseBar.push(obj)
    }
    this.baseBarData = mockBaseBar.slice(0)
  }
  mounted () {
    this.updateBaseLine()
    this.updateBaseBar()
  }
}
</script>
<style scoped lang="postcss">
.chart-item{background-color: #fff;margin-bottom: 20px;}
.card-title-action{float: right;}
</style>
