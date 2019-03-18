<template lang="pug">
.error-log-action
  el-badge(:is-dot="hasLog")
    el-button.bug-button(type="warning", @click="dialogVisible = true")
      svg-icon(icon-class="bug")
  el-dialog(
    :visible.sync="dialogVisible"
    width="60%"
    append-to-body)
    div(slot="title")
      span {{$t('log.title')}}
    div.scroll-content
      el-table(:data="logs", border)
        el-table-column(label="Message")
          template(slot-scope="scope")
            div.log-label
              span.log-msg-label Msg:
              el-tag(type="danger") {{scope.row.err.message}}
            div.log-label
              span.log-info-label Info:
              el-tag(type="warning") {{scope.row.vm.$vnode.tag}} error in {{scope.row.info}}
            div.log-label
              span.log-url-label Url:
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
    ...mapGetters({logs: 'GET_ERROR_LOGS'}),
    hasLog () {
      return this.logs & this.logs.length ? false : true
    }
  }
}
</script>
<style scoped lang="postcss">
@import "assets/styles/variable.css";

.error-log-action{display: inline-block;margin-left: 8px;margin-right: 8px;}
.bug-button{
  width: 14px;height: 14px;padding: 5px;box-sizing: content-box;
}
.log-label{
  margin-bottom: 8px;
  & .log-msg-label{padding-right: 8px;}
  & .log-info-label{padding-right: 10px;}
  & .log-url-label{padding-right: 12px;}
}
</style>