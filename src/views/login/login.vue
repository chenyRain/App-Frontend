<template>
  <div class="login">
    <login-content />
    <common-footer />
  </div>
</template>

<script>
import LoginContent from "@/components/login/login-content";
import CommonFooter from "@/components/common/footer";
export default {
  components: {
    LoginContent,
    CommonFooter
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.login {
  width: 100%;
  height: 100%;
  background: $loginBackground;
  background-repeat: no-repeat;
  background-size:100% 100%;
}
</style>
