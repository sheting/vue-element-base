<template lang="pug">
  el-card
    el-button(@click="dialogVisible = true") 点击打开dialog
    el-dialog(
      :visible.sync="dialogVisible"
      width="40%"
      append-to-body)
      div(slot="title")
        span {{title}}
      div.scroll-content
        p 这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动这是一段文字描述用来测试内容超出滚动
      span.dialog-footer(slot="footer")
        el-button(type="primary" @click="dialogVisible = false") 确定 
        el-button(type="info" plain @click="dialogVisible = false") 取消
</template>

<script>
export default {
  name: "dialogs",
  data() {
    return {
      dialogVisible: false,
      confirmVisible: false,
      title: "审核申请"
    }
  },
  methods: {}
}
</script>
<style scoped lang="postcss">
.scroll-content {
  background-color: var(--bgColor);
  max-height: 300px;
  overflow: scroll;
  & p {
    line-height: 36px;
    text-indent: 2em;
  }
}
</style>