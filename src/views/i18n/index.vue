<template lang="pug">
el-row(:gutter="20")
  el-col(:span="8")
    el-card.box-card(shadow="always" )
      div.clearfix(slot="header")
        span.title
          svg-icon(icon-class="international")
          span.ml10 切换语言
      div
        el-radio-group(v-model="lang" size="small", @change="langChange")
          el-radio(label="zh" border) 简体中文
          el-radio(label="en" border) English
        .mt20
          el-alert(type="info", title="本项目国际化基于vue-i18n")
</template>

<script>
export default {
  name: "i18n",
  data() {
    return {
      lang: 'zh'
    }
  },
  methods: {
    langChange (value) {
      localStorage.setItem('language', value)
      this.$i18n.locale = value
    }
  },
  mounted () {
    this.lang = localStorage.getItem('language') || 'zh'
  }
}
</script>
<style scoped lang="postcss">
.mt20{margin-top: 20px;}
.ml10{margin-left: 10px;}
.title{color: #676767;}
</style>