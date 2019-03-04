<template lang="pug">
  #app
    router-view
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppComponent extends Vue {
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
