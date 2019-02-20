<template lang="pug">
  el-card
    el-button(@click="dialogVisible = true") 点击打开dialog
    el-button(@click="confirmVisible = true") 点击打开confirm
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
    el-dialog(
      title="提示"
      :visible.sync="confirmVisible"
      width="350px"
      append-to-body)
      div
        p 确定要删除该阶段吗？
      span.dialog-footer(slot="footer")
        el-button(type="primary" @click="confirmVisible = false") 确定 
        el-button(type="info" plain @click="confirmVisible = false") 取消 
</template>

<script>
export default {
  name: "dialogs",
  data() {
    return {
      dialogVisible: false,
      confirmVisible: false,
      title: "审核申请"
    };
  },
  methods: {}
};
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