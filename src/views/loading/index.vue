<template lang="pug">
el-card(shadow="never")
  el-button(
	type="primary"
	v-loading.fullscreen.lock="loading1"
	@click="openFullScreen") 点击加载全局loading
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

<script>
export default {
  name: "loading",
  data() {
    return {
      loading1: false,
      loading2: false,
      nums: []
    };
  },
  methods: {
    openFullScreen() {
      this.loading1 = true;
      setTimeout(() => {
        this.loading1 = false;
      }, 2000);
    },
    openLoading() {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
        this.nums = [0, 1, 2, 3, 4, 5];
      }, 2000);
    }
  }
};
</script>
<style scoped lang="postcss">
.box-card {
  margin-top: 20px;
  width: 600px;
  height: 400px;
  border: 2px solid #999;
}
</style>