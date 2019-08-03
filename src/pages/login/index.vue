<template>
    <section class="ml-mainInner">
        <section class="ml-login-title">
            <h1 class="title">欢迎登陆</h1>
            <div class="close-btn"></div>
        </section>
        <section class="ml-slogan-container">
            <Slogan></Slogan>
        </section>
        <section class="ml-form-phone">
            <InputPhone></InputPhone>
            <VerificationCode></VerificationCode>
        </section>
        <section class="ml-open-metion">开启遇见</section>
        <section class="ml-authorization">
            <article class="register">快速注册</article>
            <p class="third-line">第三方</p>
            <figure class="third-logo"></figure>
            <section class="userAgreement">登录表示您同意 <em>《用户协议》</em></section>
        </section>
    </section>
</template>

<script type="text/ecmascript-6">
import Slogan from '@components/Slogan';
import InputPhone from './components/InputPhone.vue';
import VerificationCode from './components/VerificationCode.vue';
export default {
  components: {
    Slogan,
    InputPhone,
    VerificationCode
  },
  data() {
    return {

    };
  },
  beforeMount() {
  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/login/login.scss";
</style>
