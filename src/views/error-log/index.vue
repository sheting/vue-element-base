<template lang="pug">
.inline-block
  .bug-action(@click="dialogVisible = true")
    svg-icon(icon-class="bug")
  el-dialog(
    :visible.sync="dialogVisible"
    width="40%"
    append-to-body)
    div(slot="title")
      span {{$t('log.title')}}
    div.scroll-content
      p aa
    span.dialog-footer(slot="footer")
      el-button(type="primary", @click="dialogVisible = false", plain) 关闭
</template>

<script>
export default {
  name: "error-log",
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style scoped lang="postcss">
.inline-block{display: inline-block;}
.bug-action{
  width: 24px;height: 24px;display: inline-block; margin: 0px 20px; font-size: 14px;
  text-align: center;background-color: #f56c6c;color: #fff;border-radius: 2px;cursor: pointer;
}
</style>