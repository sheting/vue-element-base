<template lang="pug">
#base-funnel
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'
import {DataSet} from '@/libs/data-set.js'

@Component({
  name: 'base-funnel',
  components: {}
})
export default class BaseFunnelComponent extends Vue {
  // prop data
  @Prop() readonly data!: object[]
  chart: any
  // method
  initChart () {
    this.chart = new G2.Chart({
      container: 'base-funnel',
      forceFit: true,
      height: 400,
      padding: [20, 120, 120, 95],
      animate: true
    })
  }
  paintChart () {
    const ds = new DataSet()
    const dv = ds.createView().source(this.data)
    dv.transform({
      type: 'map',
      callback: function callback(row: {[key: string]: number}) {
        row.percent = row.pv / 50000
        return row
      }
    })
    const data = dv.rows
    this.chart.source(data, {
      percent: {
        nice: false
      }
    })
    this.chart.axis(false)
    this.chart.tooltip({
      showTitle: false,
      itemTpl: `<li data-index={index} style="margin-bottom:4px;">
        <span style="background-color:{color};" class="g2-tooltip-marker"></span>
        {name}<br/><span style="padding-left: 16px">浏览人数：{pv}</span><br/>
        <span style="padding-left: 16px">占比：{percent}</span><br/></li>`
    })
    this.chart.coord('rect').transpose().scale(1, -1)
    this.chart.intervalSymmetric().position('action*percent').shape('funnel')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label('action*pv', (action: any, pv: any) => {
        return `${action} ${pv}`
      }, {
        offset: 35,
        labelLine: {
          lineWidth: 1,
          stroke: 'rgba(0, 0, 0, 0.15)'
        }
      })
      .tooltip('action*pv*percent', (action: any, pv: any, percent: any) => {
        return {
          name: action,
          percent: `${percent * 100}%`,
          pv
        }
      })
    data.forEach((obj: {[key: string]: any}) => {
      // 中间标签文本
      this.chart.guide().text({
        top: true,
        position: {
          action: obj.action,
          percent: 'median'
        },
        content: `${obj.percent * 100}%`, // 显示的文本内容
        style: {
          fill: '#fff',
          fontSize: '12',
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      })
    })
    this.chart.render()
  }
  // hook
  mounted () {
    this.initChart()
    this.paintChart()
  }
}
</script>
<style scoped lang="postcss">
</style>
