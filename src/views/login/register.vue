<template>
  <div class="register">
    <register-content />
    <common-footer />
  </div>
</template>

<script>
import RegisterContent from "@/components/login/register-content";
import CommonFooter from "@/components/common/footer";
export default {
  components: {
    RegisterContent,
    CommonFooter
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.register {
  width: 100%;
  height: 100%;
  background: $loginBackground;
  background-repeat: no-repeat;
  background-size:100% 100%;
}
</style>
