<template lang="pug">
el-row(:gutter="20")
  el-col(:span="6")
    | test
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'chart-component',
  components: {}
})
export default class ChartComponent extends Vue {
}
</script>
<style scoped lang="postcss">