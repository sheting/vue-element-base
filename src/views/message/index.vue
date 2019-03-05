<template lang="pug">
  el-card
    el-button(type="success" plain @click="success") 成功
    el-button(type="warning" plain @click="warning") 警告
    el-button(type="danger" plain @click="danger") 失败
    el-button(type="info" plain @click="close") 手动关闭
    el-button(type="primary" plain @click="confirm") 确认
</template>

<script>
export default {
  name: "message",
  data() {
    return {}
  },
  methods: {
    success() {
      this.$message({
        message: "添加成功",
        type: "success"
      })
    },
    warning() {
      this.$message({
        message: "正在添加中...",
        type: "warning"
      })
    },
    danger() {
      this.$message({
        message: "添加失败",
        type: "error"
      })
    },
    close() {
      this.$message({
        showClose: true,
        message: "5秒钟后自动关闭，你也可以点击叉号主动关闭",
        type: "info",
        duration: 5000
      })
    },
    confirm() {
      this.$confirm(
        "检测到未保存的内容，是否在离开页面前保存修改？",
        "确认信息",
        {
          distinguishCancelAndClose: true,
          confirmButtonText: "保存",
          cancelButtonText: "放弃修改"
        }
      )
        .then(() => {
          this.$message({
            type: "info",
            message: "保存修改"
          })
        })
        .catch(action => {
          if (action === "cancel") {
            this.$message({
              type: "info",
              message: "放弃保存并离开页面"
            })
          }
        })
    }
  }
}
</script>
<style scoped lang="postcss">
</style>