<template lang="pug">
#base-pie
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'

@Component({
  name: 'base-pie',
  components: {}
})
export default class BasePieComponent extends Vue {
  // prop data
  @Prop() readonly data!: object[]
  chart: any
  // method
  initChart () {
    this.chart = new G2.Chart({
      container: 'base-pie',
      forceFit: true,
      height: 400,
      padding: [20, 40, 80, 40],
      animate: true
    })
  }
  paintChart () {
    this.chart.source(this.data, {
      percent: {
        formatter: function formatter(val: any) {
          val = `${val * 100}%`
          return val
        }
      }
    })
    this.chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    })
    this.chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    })
    // 辅助文本
    this.chart.guide().html({
      position: ['50%', '50%'],
      html: `<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br>
        <span style="color:#8c8c8c;font-size:20px">200</span>台</div>`,
      alignX: 'middle',
      alignY: 'middle'
    })
    const interval = this.chart.intervalStack().position('percent').color('item').label('percent', {
      formatter: (val: string, item: {[key: string]: {[key: string]: string}}) => {
        return  `${item.point.item}: ${val}`
      }
    })
    .tooltip('item*percent', (item: string, percent: number) => {
      return {
        name: item,
        value: `${percent * 100}%`
      }
    }).style({
      lineWidth: 1,
      stroke: '#fff'
    })
    this.chart.render()
    // setSelected 会出现默认选中效果
    // interval.setSelected(this.data[0])
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
