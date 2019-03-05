<template lang="pug">
el-card(shadow="never")
  el-button(
    type="primary"
    @click="openButtonLoading"
    v-loading="loading3") 点击登录
  el-button(
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="loading1"
    element-loading-spinner="el-icon-loading"
    element-loading-text="拼命加载中..."
    element-loading-background='rgba(155, 155, 155, 0.5)'
    ) 点击加载全局loading
  el-button(type="primary" @click="openLoading") 点击加载局部loading
  el-card.box-card(
    shadow="never"
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)")
    div.item(v-for="n in nums" :key="n")
      | 列表内容{{n}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'loading-component',
  components: {}
})
export default class LoadingComponent extends Vue {
  loading1: boolean = false
  loading2: boolean = false
  loading3: boolean = false
  nums: number[] = []

  openButtonLoading() {
    this.loading3 = true
    setTimeout(() => {
      this.loading3 = false
    }, 2000)
  }
  openFullScreen() {
    this.loading1 = true
    setTimeout(() => {
      this.loading1 = false
    }, 2000)
  }
  openLoading() {
    this.loading2 = true
    setTimeout(() => {
      this.loading2 = false
      this.nums = [0, 1, 2, 3, 4, 5]
    }, 2000)
  }
}
</script>
<style scoped lang="postcss">
.box-card {
  margin-top: 20px;
  width: 600px;
  height: 400px;
  border: 2px solid #999;
}
.el-loading-spinner i.loading {
}
</style>