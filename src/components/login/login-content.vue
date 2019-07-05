<template>
  <div class="login-content">
    <van-cell-group class="login-input-group">
      <van-field
        class="login-input-group"
        v-model.trim="username"
        placeholder="输入用户名"
        input-align="center"
        clearable
      />
      <van-field
        class="login-input-group"
        v-model.trim="password"
        placeholder="输入密码"
        input-align="center"
        clearable
      />
    </van-cell-group>
    <div class="login-button">
      <van-button class="login-button-1" type="danger">登 录</van-button>
    </div>
  </div>
</template>

<script>
import { Button, Field, CellGroup } from "vant";

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
  }
};
</script>

<style lang="scss" scoped>
.login-content {
  width: 100%;
  height: 100%;
  padding-top: 200px;

  .login-input-group {
    background-color: transparent;
  }

  .login-button {
    margin: 50px 20px;

    .login-button-1 {
      width: 100%;
      border-radius: 25px;
    }
  }
}
</style>
