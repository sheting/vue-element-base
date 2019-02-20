<template lang="pug">
  el-card
    el-button(@click="dialogVisible = true") 点击打开dialog
</template>

<script>
export default {
  name: "dialog",
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    // openFullScreen() {
    //   this.loading1 = true;
    //   setTimeout(() => {
    //     this.loading1 = false;
    //   }, 2000);
    // },
    // openLoading() {
    //   this.loading2 = true;
    //   setTimeout(() => {
    //     this.loading2 = false;
    //     this.nums = [0, 1, 2, 3, 4, 5];
    //   }, 2000);
    // }
  }
};
</script>
<style scoped lang="postcss">
</style>