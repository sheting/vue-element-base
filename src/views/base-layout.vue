<template lang="pug">
  router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'base-layout',
  components: {}
})
export default class BaseLayoutComponent extends Vue {
}
</script>
<style scoped lang="postcss">
</style>