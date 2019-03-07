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
      padding: [20, 40, 40, 60],
      animate: true
    })
  }
  paintChart () {
    this.chart.source(this.data)
    /* value字段相关配置
    alias: value显示到tooltip 的别名，如果不设置别名，那么默认显示字段'value'
    或者通过下面tooltip()的方式自定义显示
    **/
    this.chart.scale('value', {
      alias: `平均重量`,
      min: 0
    })
    // value 所在轴的配置
    this.chart.axis('value', {
      title: `平均重量`,
      label: {
        formatter: function formatter(val: any) {
          return `${val} KG`
        }
      }
    })
    this.chart.scale('year', {
      alias: `年份`,
      range: [0, 1]
    })
    // 这个是默认生成的基础配置
    this.chart.tooltip({
      showTitle: true, // 不显示标题
      crosshairs: {
        type: 'cross' // x: 水平辅助线; y: 垂直辅助线; cross: 十字辅助线; rect: 矩形框;
      }
    })
    // line相关配置
    this.chart.line().position('year*value').color('#5ed470').size(2).shape('smooth')
      .tooltip('year*value', (year: any, value: any) => {
        return {
          title: `详情`,
          name: `${year}年`,
          value: `平均重量: ${value}`
        }
      })
    // point 相关配置
    this.chart.point().position('year*value').color('#5ed470').size(4).shape('circle').style({
      cursor: 'pointer'
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
