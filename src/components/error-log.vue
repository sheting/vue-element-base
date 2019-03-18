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
    el-tabs(v-model="tab")
      el-tab-pane(label="vue", name="vue")
        div.scroll-content
          el-table(:data="vueLogs", border)
            el-table-column(label="type")
              template(slot-scope="scope")
                el-tag {{scope.row.type}}
            el-table-column(label="message")
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
            el-table-column(label="stack")
              template(slot-scope="scope")
                | {{scope.row.err.stack}}
      el-tab-pane(label="api", name="api")
        div.scroll-content
          el-table(:data="apiLogs", border)
            el-table-column(label="type")
              template(slot-scope="scope")
                el-tag {{scope.row.type}}
            el-table-column(label="status")
              template(slot-scope="scope")
                | {{scope.row.status}}
            el-table-column(label="url")
              template(slot-scope="scope")
                | {{scope.row.responseURL}}
            el-table-column(label="res")
              template(slot-scope="scope")
                | {{scope.row.res}}
    span.dialog-footer(slot="footer")
      el-button(type="primary", @click="dialogVisible = false", plain) 关闭
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "error-log",
  data() {
    return {
      dialogVisible: false,
      tab: 'vue'
    }
  },
  computed: {
    ...mapGetters({initLogs: 'GET_ERROR_LOGS'}),
    hasLog () {
      return this.initLogs && this.initLogs.length ? true : false
    },
    vueLogs () {
      let logs = []
      if (!this.initLogs) return logs
      logs = this.initLogs.filter(item => item.type === 'vue')
      return logs
    },
    apiLogs () {
      let logs = []
      if (!this.initLogs) return logs
      logs = this.initLogs.filter(item => item.type === 'api')
      return logs
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