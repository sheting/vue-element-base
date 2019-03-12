<template lang="pug">
#base-multi-line
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'
// const DataSet = require('@antv/data-set')
// import DataSet from '@antv/data-set'
import {DataSet} from '@/libs/data-set.js'

@Component({
  name: 'base-multi-line',
  components: {}
})
export default class BaseMultiLineComponent extends Vue {
  // prop data
  @Prop() readonly data!: object[]
  chart: any
  // method
  initChart () {
    this.chart = new G2.Chart({
      container: 'base-multi-line',
      forceFit: true,
      height: 400
    })
  }
  paintChart () {
    const ds = new DataSet()
    const dv = ds.createView().source(this.data)
    // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
    dv.transform({
      type: 'fold',
      fields: ['Tokyo', 'London'], // 展开字段集
      key: 'city', // key字段
      value: 'temperature' // value字段
    })
    this.chart.source(dv, {
      month: {
        range: [0, 1]
      }
    })
    this.chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    })
    this.chart.axis('temperature', {
      label: {
        formatter: function formatter(val: number | string) {
          return `${val}°C`
        }
      }
    })
    this.chart.line().position('month*temperature').color('city').shape('smooth')
    this.chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    })
    this.chart.render()
  }
  // watch
  @Watch('data')
  onChangeData (nv: object[], ov: object[]) {
    if (nv) this.paintChart()
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
