<template lang="pug">
.login-container
  .container-mask
  el-row.login-row(type="flex", justify="center", align="middle")
    el-col.login-col(:span="12")
      el-card.user-content
        el-form.form-container(:model="loginForm", :rules="rules", ref="loginForm")
          el-form-item
            h4.login-title 登录
          el-form-item(prop="name")
            el-input(v-model="loginForm.name", placeholder="请输入用户名")
              template(slot="prepend")
                svg-icon(icon-class="user")
          el-form-item(prop="password")
            el-input(v-model="loginForm.password", type="password", placeholder="请输入密码")
              template(slot="prepend")
                svg-icon(icon-class="password")
          el-form-item
            el-row(:gutter="10")
              el-col(:span="12")
                el-button.login-btn(type="primary", @click="doLogin", :loading="pending", :disabled="pending") 登录
              el-col(:span="12")
                el-button.login-btn(@click="doBack") 返回
        el-alert(:title="desc", type="warning", center, :closable="false")
        .urgent-contact
          | 如有问题，请发送邮件至: service@chainnova.com
  .foot-content
    .link
      a.link-item(href="#") 帮助
      a.link-item(href="#") 隐私
      a.link-item(href="#") 条款
    .belong
      | 智链万源 © 2019 版权所有
</template>

<script>
const formRef = () => {
  return {
    name: '',
    password: ''
  }
}
export default {
  name: 'login',
  data () {
    return {
      loginForm: formRef(),
      rules: {
        name: [{required: true, message: `请输入用户名`, trigger: 'change'}],
        password: [{required: true, message: `请输入密码`, trigger: 'change'}]
      },
      desc: `您需要登录后才能进行操作`,
      pending: false
    }
  },
  methods: {
    doLogin () {
      setTimeout(() => {
        this.$message({
          message: `登录成功`,
          type: 'success'
        })
      }, 1000)
      setTimeout(() => {
        this.$router.push({ path: '/' })
      }, 2000)
    },
    doBack () {
      this.$router.push({path: '/dashboard'})
    }
  },
  mounted() {
  }
}
</script>
<style scoped lang="postcss">
.login-title{
  padding: 15px 10px 10px 10px;font-size: 2em;text-align: center;
}
.login-container {
  position: relative;width: 100%;height: 100vh;background-image: url('~@/assets/images/bg.jpg');background-size: cover;
}
.container-mask{
  background: rgba(0,0,0,.3);position: absolute;top: 0;left: 0;right: 0;bottom: 0;
}
.foot-content{
  display: flex;flex-direction: column;align-items: center;justify-content: center;position: fixed;left: 0px;right: 0px;bottom: 20px;
  & .link{margin-bottom: 8px;}
  & .link-item{
    font-size: 13px;color: #fff;margin-right: 40px;text-decoration: none;
    &:last-child{margin-right: 0px;}
  }
  & .belong{font-size: 13px;color: #fff;line-height: 1.5;text-align: right;}
}
.login-row{height: 100%;}
.login-col{display: flex; justify-content: center;}
.user-content{width: 450px;border-radius: 5px;}
.urgent-contact{font-size: 13px; color: #999;margin-top: 10px;text-align: center;}
.login-btn{width: 100%;display: block;}
</style>