<template>
  <div class="content">
    <van-cell-group class="login-input-group">
      <van-field
        class="login-input-group"
        v-model.trim="username"
        placeholder="输入用户名"
        error
        input-align="center"
        clearable
      />
      <van-field
        class="login-input-group"
        v-model.trim="password"
        placeholder="输入密码"
        error
        input-align="center"
        clearable
      />
    </van-cell-group>
    <div class="login-button">
      <van-button class="login-button-1" type="danger" @click="login">登 录</van-button>
    </div>
    <div class="login-forget">
      <a class="forget-pass" href="javascript:;" @click="forgetPassword">忘记密码？</a>
      <a class="forget-pass" href="/register">去注册 ></a>
    </div>
  </div>
</template>

<script>
import { Button, Field, CellGroup, Toast } from "vant";
import { loginInputVerify } from "@/utils/global";

export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (
        !loginInputVerify({
          username: this.username,
          password: this.password
        })
      ) {
        return;
      }

      this.$router.push("/");
    },
    forgetPassword() {
      Toast.fail("别找回了，重新注册吧");
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding-top: 200px;

  .login-forget {
    margin: 0 24px;
    display: flex;
    justify-content: space-between;
    .forget-pass {
      color: white;
      font-size: 14px;
    }
  }

  .login-input-group {
    background-color: transparent;
  }

  .login-button {
    margin: 50px 20px 15px 20px;

    .login-button-1 {
      width: 100%;
      border-radius: 25px;
    }
  }
}
</style>
