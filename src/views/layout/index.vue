<template lang="pug">
el-container.container
  el-header.header
    .logo
    el-dropdown
      span.el-dropdown-link
        span.mr8.ml8 {{username}}
        i.el-icon-arrow-down.el-icon--right
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item
          span(@click="logout") {{$t('platform.logout')}}
  el-container.sidebar
    el-aside(:width="leftWidth" ref='leftNav')
      el-menu(:default-active="active", :collapse="isCollapse")
        el-menu-item(index="/dashboard")
          router-link(tag="li", to="/dashboard")
            svg-icon(icon-class="dashboard")
            span {{$t('sidebar.dashboard')}}
        el-menu-item(index="/login")
          router-link(tag="li", to="/login")
            svg-icon(icon-class="login")
            span {{$t('sidebar.login')}}
        el-menu-item(index="/404")
          router-link(tag="li", to="/404")
            svg-icon(icon-class="404")
            span {{$t('sidebar.page404')}}
        el-submenu(index="/components")
          template(slot="title")
            i.el-icon-menu
            span {{$t('sidebar.components')}}
          el-menu-item-group
            el-menu-item(index="/components/table")
              router-link(tag="li", to="/components/table")
                svg-icon(icon-class="table")
                span {{$t('sidebar.table')}}
            el-menu-item(index="/components/card")
              router-link(tag="li", to="/components/card")
                svg-icon(icon-class="card")
                span {{$t('sidebar.card')}}
            el-menu-item(index="/components/pagination")
              router-link(tag="li", to="/components/pagination")
                svg-icon(icon-class="pagination")
                span {{$t('sidebar.pagination')}}
            el-menu-item(index="/components/loading")
              router-link(tag="li", to="/components/loading")
                svg-icon(icon-class="load")
                span {{$t('sidebar.loading')}}
            el-menu-item(index="/components/dialog")
              router-link(tag="li", to="/components/dialog")
                svg-icon(icon-class="dialog")
                span {{$t('sidebar.dialog')}}
            el-menu-item(index="/components/message")
              router-link(tag="li", to="/components/message")
                svg-icon(icon-class="message")
                span {{$t('sidebar.message')}}
            el-menu-item(index="/components/variables")
              router-link(tag="li", to="/components/variables")
                svg-icon(icon-class="theme")
                span {{$t('sidebar.variables')}}
            el-menu-item(index="/components/form")
              router-link(tag="li", to="/components/form")
                svg-icon(icon-class="form")
                span {{$t('sidebar.form')}}
            el-menu-item(index="/components/tree")
              router-link(tag="li", to="/components/tree")
                svg-icon(icon-class="tree")
                span {{$t('sidebar.tree')}}
            el-menu-item(index="/components/i8n")
              router-link(tag="li", to="/components/i18n")
                svg-icon(icon-class="international")
                span {{$t('sidebar.i18n')}}
    el-main
      router-view
</template>

<script>
export default {
  name: "global-layout",
  data() {
    return {
      leftWidth:'200px',
      pageWidth: document.body.clientWidth,
      isCollapse: false,
      username: ''
    }
  },
  computed: {
    active() {
      return this.$route.path
    }
  },
  created(){
    this.resize()
  },
  methods: {
    logout() {
      // 即使logout失败了，也会清空userAuth
      sessionStorage.removeItem('isLogin')
      sessionStorage.removeItem('username')
      this.$store.dispatch('LOGOUT')
        .then(response => {
          this.$store.dispatch('SET_USER_INFO')
          this.logoutMsg('success', '退出成功')
          this.$router.push('/login')
        })
        .catch(err => {
          this.$store.dispatch('SET_USER_INFO')
          this.$router.push('/login')
        })
    },
    resize(){
      this.pageWidth = window.screenWidth = document.body.clientWidth
        return (() => {
            if(this.pageWidth <= 960){
              this.$nextTick(()=>{
                this.leftWidth = '65px'
                this.isCollapse = true
              })
            }else{
               this.leftWidth = '200px'
               this.isCollapse = false
            }
        })()
    }
  },
  mounted () {
    this.username = sessionStorage.getItem('username') || '智小链'
    window.onresize = () => {
      this.resize()
    }
  }
}
</script>
<style scoped lang="postcss">
:root {
  --sidebarBgColor: #fc0;
}
.container {
  height: 100vh;
  background-color: #f5f5f5;
}
.logo {
  margin-top: 5px;
  &::before {
    content: "";
    width: 85px;
    height: 40px;
    display: inline-block;
    background-image: url("~@/assets/images/logo.png");
    background-size: cover;
  }
}
.header {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--topBgColor);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  & .el-dropdown-link {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
  }
}
.sidebar {
  margin-top: 62px;
  & .el-menu {
    height: 100%;
    background-color: var(--sidebarBgColor);
  }
}
</style>
