<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form" auto-complete="on" label-position="left">
        <div class="title-container">
            <h3 class="title">
                {{ $t('login.title') }}
            </h3>
        </div>
        <el-form-item prop="username">
            <span class="svg-container">
            </span>
            <el-input
              v-model="loginForm.username"
              :placeholder="$t('login.username')"
              name="username"
              type="text"
              auto-complete="on"
            />
        </el-form-item>
        <el-form-item prop="password">
            <span class="svg-container">
            </span>
            <el-input
              v-model="loginForm.password"
              :placeholder="$t('login.password')"
              name="password"
              type="password"
              auto-complete="on"
            />
        </el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;">
            {{ $t('login.logIn') }}
        </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      }
    };
  }
};
</script>

<style lang="scss">

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }
  
  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>