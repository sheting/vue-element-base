<template lang="pug">
el-row(:gutter="20")
  el-col(:span="8")
    h2 带阴影的card
    el-card.box-card(shadow="always")
      div.clearfix(slot="header")
        span 北大荒
        el-button.button( type='text') 操作按钮
      div.item(v-for="n in  4" :key="n")
        | 列表内容{{n}}
  el-col(:span="8")
    h2 悬浮出现阴影
    el-card.box-card(shadow="hover")
      div.clearfix(slot="header")
        span 北大荒
        el-button.button( type='text') 操作按钮
      div.item(v-for="n in  4" :key="n")
        | 列表内容{{n}}
  el-col(:span="8")
    h2 不带阴影的card
    el-card.box-card(shadow="never")
      div.clearfix(slot="header")
        span 北大荒
        el-button.button(type='text') 操作按钮
      div.item(v-for="n in  4" :key="n")
        | 列表内容{{n}}
</template>

<script>
export default {
  name: 'cards',
  data () {
    return {}
  },
  methods: {
  }
}
</script>
<style scoped lang="postcss">
h2 {
  line-height: 50px;
  font-weight: bold;
}
.item{
  margin-bottom: 15px;
}
.box-card{
  max-width: 500px;
}
.button{
  float: right;
  padding:3px 0;
}
</style>