<template lang="pug">
el-row(:gutter="20")
  el-col(:span="8")
    el-card.box-card(shadow="always" )
      div.clearfix(slot="header")
        span.title
          svg-icon(icon-class="international")
          span.ml10 {{$t('lang.title')}}
      div
        el-radio-group(v-model="lang" size="small", @change="langChange")
          el-radio(label="zh" border) {{$t('lang.zh')}}
          el-radio(label="en" border) {{$t('lang.en')}}
        .mt20
          el-alert(type="info", :title="$t('lang.desc')", :closable="false")
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
@import "assets/styles/variable.css";

.mt20{margin-top: 20px;}
.ml10{margin-left: 10px;}
.title{color: var(--gray1);}
</style>