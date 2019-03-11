<template lang="pug">
#base-bar
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'

@Component({
  name: 'base-bar',
  components: {}
})
export default class BaseBarComponent extends Vue {
  // prop data
  @Prop() readonly data!: object[]
  chart: any
  // method
  initChart () {
    this.chart = new G2.Chart({
      container: 'base-bar',
      forceFit: true,
      height: 400,
      padding: [20, 20, 30, 90],
      animate: true
    })
  }
  paintChart () {
    this.chart.source(this.data, {
      value: {
        tickCount: 5
      }
    })
    this.chart.scale('value', {
      alias: '销售额(万)'
    })
    this.chart.axis('value', {
      label: {
        textStyle: {
          fill: '#aaaaaa'
        },
        formatter: function formatter(text: any) {
          return text.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        }
      },
      title: {
        offset: 70
      }
    })
    // bar 相关配置
    this.chart.interval().position('type*value').opacity(1)
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
