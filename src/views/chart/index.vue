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
          .card-title-action
            el-button(type="text", @click="updateBaseMultiLine", icon="el-icon-refresh") 刷新
        base-multi-line(:data="baseMultiLineData")
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 基础柱状图
          .card-title-action
            el-button(type="text", @click="updateBaseBar", icon="el-icon-refresh") 刷新
        base-bar(:data="baseBarData")
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 堆叠柱状图
          .card-title-action
            el-button(type="text", @click="updateBaseStackBar", icon="el-icon-refresh") 刷新
        base-stack-bar(:data="baseStackBarData")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import baseLine from '@/components/charts/base-line.vue'
import baseMultiLine from '@/components/charts/base-multi-line.vue'
import baseBar from '@/components/charts/base-bar.vue'
import baseStackBar from '@/components/charts/base-stack-bar.vue'

@Component({
  name: 'chart-component',
  components: {baseLine, baseMultiLine, baseBar, baseStackBar}
})
export default class ChartComponent extends Vue {
  private baseLineData: object[] = []
  private baseBarData: object[] = []
  private baseMultiLineData: object[] = []
  private baseStackBarData: object[] = []

  updateBaseLine () {
    const mockBaseLine: object[] = []
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
    const mockBaseBar: object[] = []
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
  updateBaseMultiLine () {
    const mockData: object[] = []
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    for (let i = 0; i < months.length; i++) {
      const obj = {
        month: months[i],
        Tokyo: Number((Math.random() * 100).toFixed(1)),
        London: Number((Math.random() * 100).toFixed(1))
      }
      mockData.push(obj)
    }
    this.baseMultiLineData = mockData.slice(0)
  }
  updateBaseStackBar () {
    const mockData: object[] = []
    const names: string[] = ['London', 'Berlin']
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    for (let i = 0; i < names.length; i++) {
      const obj: {[key: string]: string | number } = {
        name: names[i]
      }
      for (let j = 0; j < months.length; j++) {
        obj[months[j]] = Number((Math.random() * 100).toFixed(1))
      }
      mockData.push(obj)
    }
    this.baseStackBarData = mockData.slice(0)
  }
  beforeMount () {
    this.updateBaseLine()
    this.updateBaseBar()
    this.updateBaseMultiLine()
    this.updateBaseStackBar()
  }
}
</script>
<style scoped lang="postcss">
.chart-item{background-color: #fff;margin-bottom: 20px;}
.card-title-action{float: right;}
</style>
