<template>
  <div class="login">
    <login-content />
  </div>
</template>

<script>
import LoginContent from "@/components/login/login-content";
export default {
  components: {
    LoginContent
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login2.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%;
}
</style>
