<template>
    <section class="ml-mainInner">
        <section class="ml-login-title">
            <h1 class="title">欢迎登陆</h1>
            <div class="close-btn" @click.stop="reBack"></div>
        </section>
        <section class="ml-slogan-container">
            <Slogan></Slogan>
        </section>
        <section class="ml-form-phone">
            <InputPhone></InputPhone>
            <VerificationCode></VerificationCode>
        </section>
        <section class="ml-open-metion" :class="{'active':submitOnOff}" @click.stop="loginFunc">开启遇见</section>
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
import { mapGetters } from 'vuex';
import Common from '@scripts/lib/common.js';
import RegularTest from '@scripts/lib/regularTest.js';
import axios from 'axios';
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
    ...mapGetters(['codeNum', 'phoneNum']),
    submitOnOff() {
      const _this = this;
      return (!Common.checkInvalid(_this.phoneNum)) && RegularTest.testPhoneNum(_this.phoneNum) && (!Common.checkInvalid(_this.codeNum));
    }
  },
  methods: {
    reBack() {
      window.history.back();
    },
    loginFunc() {
      const _this = this;
      axios.get('/api/customer/login', {
        params: {
          phone: _this.phoneNum,
          smsCode: _this.codeNum
        }
      })
        .then(function(response) {
          console.log(response);
          if (parseInt(response.data.code, 10) === 200) {
            localStorage.setItem('customerId', response.data.result.id);
            _this.reBack();
          }
          else {
            alert('登录失败');
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/login/login.scss";
</style>
