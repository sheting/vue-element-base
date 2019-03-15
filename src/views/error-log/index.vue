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
      el-table(:data="logs", border)
        el-table-column(label="Message")
          template(slot-scope="scope")
            div
              span Msg:
              el-tag(type="danger") {{scope.row.err.message}}
            div
              span Info:
              el-tag(type="warning") {{scope.row.vm.$vnode.tag}} error in {{scope.row.info}}
            div
              span Url:
              el-tag(type="success") {{scope.row.url}}
        el-table-column(label="Stack")
          template(slot-scope="scope")
            | {{scope.row.err.stack}}
    span.dialog-footer(slot="footer")
      el-button(type="primary", @click="dialogVisible = false", plain) 关闭
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "error-log",
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters({logs: 'GET_ERROR_LOGS'})
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