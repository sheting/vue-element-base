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
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 基础环图
        base-pie(:data="basePieData")
    el-col.chart-item(:xs="24" :sm="24" :md="12" :lg="12" :xl="8")
      el-card
        div(slot="header")
          span 基础环图
        base-funnel(:data="baseFunnelData")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import baseLine from '@/components/charts/base-line.vue'
import baseMultiLine from '@/components/charts/base-multi-line.vue'
import baseBar from '@/components/charts/base-bar.vue'
import baseStackBar from '@/components/charts/base-stack-bar.vue'
import basePie from '@/components/charts/base-pie.vue'
import baseFunnel from '@/components/charts/base-funnel.vue'

@Component({
  name: 'chart-component',
  components: {baseLine, baseMultiLine, baseBar, baseStackBar, basePie, baseFunnel}
})
export default class ChartComponent extends Vue {
  private baseLineData: object[] = []
  private baseBarData: object[] = []
  private baseMultiLineData: object[] = []
  private baseStackBarData: object[] = []
  private basePieData: object[] = []
  private baseFunnelData: object[] = []

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
  updateBasePie () {
    const mockData: object[] = [{
      item: '北京',
      count: 40,
      percent: 0.4
    }, {
      item: '上海',
      count: 21,
      percent: 0.21
    }, {
      item: '广州',
      count: 17,
      percent: 0.17
    }, {
      item: '深圳',
      count: 13,
      percent: 0.13
    }, {
      item: '南昌',
      count: 9,
      percent: 0.09
    }]
    this.basePieData = mockData.slice(0)
  }
  updateBaseFunnel () {
    const mockData: object[] = [{
      action: '浏览网站',
      pv: 50000
    }, {
      action: '放入购物车',
      pv: 35000
    }, {
      action: '生成订单',
      pv: 25000
    }, {
      action: '支付订单',
      pv: 15000
    }, {
      action: '完成交易',
      pv: 8000
    }]
    this.baseFunnelData = mockData.slice(0)
  }
  beforeMount () {
    this.updateBaseLine()
    this.updateBaseBar()
    this.updateBaseMultiLine()
    this.updateBaseStackBar()
    this.updateBasePie()
    this.updateBaseFunnel()
  }
}
</script>
<style scoped lang="postcss">
.chart-item{background-color: #fff;margin-bottom: 20px;}
.card-title-action{float: right;}
</style>
