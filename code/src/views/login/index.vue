<template lang="pug">
.login-container
  //- .container-mask
  el-row.login-row.height100(type="flex" justify="center" align="middle")
    el-col.login-col
      el-card.login-card(:body-style="{padding:'0px',height: '100%'}")
        el-row.height100(type="flex")
          el-col.login-col-bg(:span="14")
            .logo
            .content
              .product-logo
              p {{$t('platform.title')}}
          el-col.form-container.height100(:span="10")
            el-form(:model="loginForm", :rules="rules", ref="loginForm")
              el-form-item
                h4.login-title {{$t('form.title')}}
              el-form-item(prop="username")
                el-input.login-input(v-model="loginForm.username")
                  template(slot="prepend") {{$t('form.username')}}:
              el-form-item(prop="password")
                el-input.login-input(v-model="loginForm.password" type="password")
                  template(slot="prepend") {{$t('form.password')}}:
              el-form-item.clearfix
                el-checkbox.remember-pass(:label="$t('form.remember')" name="loginForm.remember")
                span.forget-pass {{$t('form.forgot')}}
              el-form-item
                el-button.login-btn(
                  type="primary"
                  @click="doLogin"
                  v-loading="pending"
                  element-loading-background='rgba(255, 255, 255, 0.2)'
                  :disabled="pending") {{$t('form.login')}}
            span.foot 智链ChainNova © 2018 
</template>

<script>
const formRef = () => {
  return {
    username: '',
    password: '',
    remember: false
  }
}
export default {
  name: 'login',
  data() {
    return {
      loginForm: formRef(),
      rules: {
        username: [{ required: true, message: this.$t('validate.username'), trigger: 'change' }],
        password: [{ required: true, message: this.$t('validate.password'), trigger: 'change' }]
      },
      // desc: `您需要登录后才能进行操作`,
      pending: false
    }
  },
  methods: {
    doLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid && !this.pending) {
          this.pending = true
          let payload = Object.assign({}, this.loginForm)
          this.$store.dispatch('LOGIN', payload)
            .then(res => {
              sessionStorage.setItem('isLogin', true)
              sessionStorage.setItem('username', payload.username)
              this.$store.dispatch('SET_USER_INFO')
              this.messageInstance = this.$message({
                message: this.$t('message.loginSuccess'),
                type: 'success',
                duration: 1500
              })
              this.pending = false
              setTimeout(() => {
                this.$router.push({ path: '/' })
              }, 500)
            })
            .catch(error => {
              this.pending = false
              this.messageInstance = this.$message({
                message: error.message || error,
                type: 'danger',
                duration: 0,
                showClose: true
              })
            })
        }
      })
    }
  },
  mounted() {
    sessionStorage.removeItem('isLogin')
    sessionStorage.removeItem('username')
  }
}
</script>
<style scoped lang="postcss">
@import "assets/styles/variable.css";

.height100 {
  height: 100%;
}
.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/images/bg1.jpg");
  background-size: cover;
  & .login-col {
    display: block;
    width: 67%;
    min-width: 750px;
    height: 67%;
    min-height: 500px;
    & .login-card {
      height: 100%;
      border: none;
      border-radius: 8px;
      & .login-col-bg {
        position: relative;
        height: 100%;
        background-image: url("~@/assets/images/login-col-bg.png");
        background-size: cover;
        & .logo {
          display: inline-block;
          width: 100px;
          height: 72px;
          margin: 15px;
          background-image: url("~@/assets/images/login-logo.png");
          background-size: cover;
        }
        & .content {
          text-align: center;
          margin-top: 50px;
          font-size: 36px;
          & .product-logo {
            width: 130px;
            height: 75px;
            display: inline-block;
            background-image: url("~@/assets/images/login-product-logo.png");
            background-size: cover;
          }
        }
      }
      & .form-container {
        box-sizing: border-box;
        position: relative;
        width: 330px;
        padding-top: 8%;
        margin: 0 auto;
        & .login-title {
          position: relative;
          font-size: 48px;
          font-weight: 200;
          margin-bottom: 50px;
          &::before {
            content: "";
            width: 50px;
            height: 2px;
            position: absolute;
            bottom: -35px;
            left: 5px;
            background-color: var(--gray);
          }
        }
        & .login-btn {
          width: 100%;
          height: 60px;
          border-radius: 10px;
          background-color: var(--primary);
          font-size: 24px;
          /* letter-spacing: 25px; */
          /* text-indent: 25px; */
          /* box-shadow: 0 3px 15px 0 rgb(0, 0, 0, 0.4); */
          border: none;
        }
        & .remember-pass {
          color: var(--textHintColor);
        }
        & .forget-pass {
          float: right;
          color: #005aff;
        }
        & .login-input {
          font-size: 18px;
        }
        & .foot {
          position: absolute;
          bottom: 3%;
          display: block;
          width: 100%;
          font-size: 14px;
          text-align: center;
          color: var(--textHintColor);
        }
      }
    }
  }
}
</style>
