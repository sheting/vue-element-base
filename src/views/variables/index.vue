<template lang="pug">
el-row(:gutter="20")
  el-col(:span="12")
    el-card(shadow="hover")
      h3 Usage:
      p required element-theme(global), element-theme-chalk(dev)
      br
      p 1. edit variables in $PROJECT/element-variables.scss
      br
      br
      p 2. build theme with commandline ,options: -w(watch), -c(variable files)
      p >et
      br
      br
      p 3. import theme in the main entry file (src/main.js)
      p "import '../theme/index.css'"
  el-col(:span="12")
    el-card(shadow="hover")
      h3 》overide elementUI 变量详见 $PROJECT/element-variables.scss
      h3 》postcss 变量详见 src/styles/variable.css

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'variable',
  components: {}
})
export default class VariableComponent extends Vue {
}
</script>
<style scoped lang="postcss">
</style>
