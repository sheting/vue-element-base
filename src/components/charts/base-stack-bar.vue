<template lang="pug">
#base-stack-bar
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'
import {DataSet} from '@/libs/data-set.js'

@Component({
  name: 'base-stack-bar',
  components: {}
})
export default class BaseStackBarComponent extends Vue {
  // prop data
  @Prop() readonly data!: object[]
  chart: any
  // method
  initChart () {
    this.chart = new G2.Chart({
      container: 'base-stack-bar',
      forceFit: true,
      height: 400,
      padding: [20, 20, 80, 90],
      animate: true
    })
  }
  paintChart () {
    const ds = new DataSet()
    const dv = ds.createView().source(this.data)
    dv.transform({
      type: 'fold',
      fields: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // 展开字段集
      key: 'month', // key字段
      value: 'value' // value字段
    })
    this.chart.source(dv)
    // 图例
    // this.chart.legend({
    //   position: 'bottom',
    //   itemGap: 20
    // })
    this.chart.intervalStack().position('month*value').color('name')
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
