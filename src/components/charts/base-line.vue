<template lang="pug">
#base-line
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'
@Component({
  name: 'base-line',
  components: {}
})
export default class BaseLineComponent extends Vue {
  // prop data
  @Prop() readonly data!: object[]
  chart: any
  // method
  initChart () {
    this.chart = new G2.Chart({
      container: 'base-line',
      forceFit: true,
      height: 400,
      padding: [ 20, 40, 40, 20 ],
      animate: true
    })
  }
  paintChart () {
    this.chart.source(this.data)
    this.chart.scale('value', {
      min: 0
    })
    this.chart.scale('year', {
      range: [0, 1]
    })
    this.chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    })
    this.chart.line().position('year*value')
    this.chart.point().position('year*value').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    })
    this.chart.render()
  }
  updateChart () {
    this.chart.changeData(this.data)
  }
  // watch
  @Watch('data')
  onChangeData (nv: object[], ov: object[]) {
    if (nv) this.updateChart()
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
