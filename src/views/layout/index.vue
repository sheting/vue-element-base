<template lang="pug">
el-container.container
  el-header.header
    .logo
    el-dropdown
      span.el-dropdown-link
        span.mr8.ml8 智小链
        i.el-icon-arrow-down.el-icon--right
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item
          span(@click="logout") 退出登录
  el-container.sidebar
    el-aside(width="200px")
      el-menu(:default-active="active", :collapse="isCollapse")
        el-menu-item(index="/dashboard")
          router-link(tag="li", to="/dashboard")
            svg-icon(icon-class="dashboard")
            span Dashboard
        el-menu-item(index="/login")
          router-link(tag="li", to="/login")
            svg-icon(icon-class="login")
            span Login
        el-menu-item(index="/404")
          router-link(tag="li", to="/404")
            svg-icon(icon-class="404")
            span 404
        el-submenu(index="/components")
          template(slot="title")
            i.el-icon-menu
            span components
          el-menu-item-group
            el-menu-item(index="/components/table")
              router-link(tag="li", to="/components/table")
                svg-icon(icon-class="table")
                span Table
            el-menu-item(index="/components/card")
              router-link(tag="li", to="/components/card")
                svg-icon(icon-class="card")
                span Card
            el-menu-item(index="/components/pagination")
              router-link(tag="li", to="/components/pagination")
                svg-icon(icon-class="card")
                span pagination
    el-main
      router-view
</template>

<script>
export default {
  name: 'global-layout',
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    active () {
      return this.$route.path
    }
  },
  methods: {
    logout () {
      this.$message({
        message: '退出成功',
        type: 'success'
      })
    }
  }
}
</script>
<style scoped lang="postcss">
.container{background-color: #f5f5f5; min-height: 100vh;}
.logo{
  margin-top: 5px;
  &::before{
    content: '';width: 85px;height: 40px;display: inline-block;background-image: url('~@/assets/images/logo.png');background-size: cover;
  }
}
.header{
  height: 62px; display: flex;align-items: center;justify-content: space-between;background: #2f323f;color: #fff;
  position: fixed;left: 0;right: 0;top: 0;z-index: 99;
  & .el-dropdown-link{display:inline-flex;align-items: center;justify-content: space-between;cursor: pointer; color: #fff;font-weight: 500;}
}
.sidebar{
  margin-top: 62px;
  & .el-menu{height: 100%;}
}
</style>