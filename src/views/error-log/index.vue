<template lang="pug">
.error-log
  span {{title}}
  error-log
  .mt10
    el-alert(type="info")
      span {{desc}}
      a(href="https://vuejs.org/v2/api/#errorHandler", target="_blank") 文档介绍
</template>

<script>
import errorLog from "@/components/error-log"

export default {
  name: "error-log-layout",
  components: {errorLog},
  data() {
    return {
      title: this.$t('log.pageTitle'),
      desc: this.$t('log.desc')
    }
  },
  mounted () {
    // this.b = b
  }
}
</script>
<style scoped lang="postcss">
@import 'assets/styles/variable.css';
.mt10{margin-top: 10px;}
.error-log{
  height: calc(100vh - 102px); padding: 20px; background-color: var(--colorWhite);
}
</style>