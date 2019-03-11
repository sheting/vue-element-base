<template lang="pug">
#base-multi-line
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import G2 from '@antv/g2'

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
    // const ds = 'a'
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
