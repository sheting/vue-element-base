<template lang="pug">
  el-row
    el-col(:span="24")
      .page-not-found
        .title
          svg-icon(icon-class="404-page", class-name="not-found-icon")
          .title-desc
            .desc-404 404
            .desc-not-found Page Not found
        .content
          | Oops, The page you're looking for cannot be found.
        .footer
          router-link(to="/dashboard") 返回首页
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'not-found',
  components: {}
})
export default class NotFoundComponent extends Vue {
}
</script>
<style scoped lang="postcss">
.page-not-found{
  width: 330px;margin: 0 auto;margin-top: 60px;
  & .title{
    display: flex;justify-content: center;align-items: center;
  }
  & .title-desc{margin-left: 20px;}
  & .desc-404{font-size: 24px;font-weight: 500;}
  & .content{font-size: 14px;text-align: center;margin-top: 15px;}
  & .footer{
    margin-top: 15px;padding:8px;border-top: 1px solid #e9e9e9;text-align: center;
    & > a{text-decoration: none;color: #36a3f7;}
  }
}
.not-found-icon{font-size: 98px;color: #36a3f7;}
</style>