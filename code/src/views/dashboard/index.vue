<template lang="pug">
div
  el-row(:gutter="20")
    el-col(:span="6" v-for="item in statics" :key="item.text")
      el-card.overview-box(shadow="never")
        p.name {{item.text}}
        p.num {{item.num}}
  el-row.content(:gutter="20")
    el-col(:span='12')
      el-card(shadow="never")
        div.title( slot="header") 区块列表
        div.body
          | content
    el-col(:span='12')
      el-card(shadow="never")
        div.title( slot="header") 交易列表
        div.body
          | content
  el-row.content(:gutter="20")
    el-col(:span='18')
      el-card(shadow="never")
       div.title( slot="header") 联盟链
       div.body
        | content
    el-col(:span='6')
      el-card(shadow="never")
        div.title( slot="header") 拓扑图
        div.body
          | content
  el-row.content(:gutter="20")
    el-col(:span='6')
      el-card(shadow="never")
       div.title( slot="header") 统计
       div.body
        | content
    el-col(:span='18')
      el-card(shadow="never")
        div.title( slot="header") 统计
        div.body
          | content
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "dashboard",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({statics: 'GET_STATICS'})
  },
  methods: {
    getStatic () {
      this.$store.dispatch('GET_STATICS')
    }
  },
  mounted () {
    this.getStatic()
  }
}
</script>
<style scoped lang="postcss">
.overview-box {
  height: 130px;
  text-align: center;
  line-height: 40px;
  & .num {
    font-size: 24px;
    font-weight: bold;
  }
}
.content {
  margin: 10px 0;
  & .el-card {
    height: 280px;
    & .body {
      line-height: 200px;
      text-align: center;
    }
  }
}
</style>