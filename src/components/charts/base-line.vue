<template lang="pug">
#base-line
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'
@Component({
  name: 'base-line',
  components: {}
})
export default class BaseLineComponent extends Vue {
  data: object[] = [{
    year: '1991',
    value: 3
  }, {
    year: '1992',
    value: 4
  }, {
    year: '1993',
    value: 3.5
  }, {
    year: '1994',
    value: 5
  }, {
    year: '1995',
    value: 4.9
  }, {
    year: '1996',
    value: 6
  }, {
    year: '1997',
    value: 7
  }, {
    year: '1998',
    value: 9
  }, {
    year: '1999',
    value: 13
  }]
  chart: any

  initChart () {
    this.chart = new G2.Chart({
      container: 'base-line',
      forceFit: true,
      height: 400
    })
  }
  updateChart () {
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
  mounted () {
    this.initChart()
    this.updateChart()
  }
}
</script>
<style scoped lang="postcss">
</style>
