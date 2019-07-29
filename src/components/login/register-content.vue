<template>
  <div class="content">
    <van-cell-group class="login-input-group">
      <van-field
        class="login-input-group"
        v-model.trim="username"
        placeholder="输入用户名"
        input-align="center"
        error
        clearable
      />
      <van-field
        class="login-input-group"
        v-model.trim="password"
        placeholder="输入密码"
        input-align="center"
        error
        clearable
      />
      <van-field
        class="login-input-group"
        v-model.trim="repassword"
        placeholder="再次输入密码"
        input-align="center"
        error
        clearable
      />
    </van-cell-group>
    <div class="login-button">
      <van-button class="login-button-1" type="danger" @click="register">注 册</van-button>
    </div>
    <div class="login-forget">
      <a class="forget-pass" href>忘记密码？</a>
      <a class="forget-pass" href="/login">去登录 ></a>
    </div>
  </div>
</template>

<script>
import { Button, Field, CellGroup } from "vant";
import { registerInputVerify } from "@/utils/global";

export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    register() {
      if (
        !registerInputVerify({
          username: this.username,
          password: this.password,
          repassword: this.repassword
        })
      ) {
        return;
      }
      this.$router.push("/");
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
    .van-field__control--center {
      color: white !important;
    }
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
