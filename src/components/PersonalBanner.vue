<template>
    <section class="ml-personal-banner" :class="{'loginSuccess':loginOnOff,'login':!loginOnOff}">
        <div class="handle-bar">
            <span class="set-icon" @click.stop="jumpPage(0)"></span>
            <span class="detail" @click.stop="jumpPage(1)"></span>
        </div>
        <div class="login-container">
            <section class="default-logo">
                <i class="icon"></i>
            </section>
            <section class="login-btn" @click.stop="jumpPage(2)">立即登录</section>
        </div>
        <section class="user-info">
            <figure class="user-logo"></figure>
            <article class="user-detail">
                <div class="user-name">可爱米其林</div>
                <div class="love-word">在最好的时间，只为遇见动人的你~</div>
            </article>
        </section>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
export default {
  data() {
    const loginOnOff = !Common.checkInvalid(localStorage.getItem('customerId'));
    return {
      loginOnOff: loginOnOff
    };
  },
  methods: {
    jumpPage(index) {
      let pageUrl = '';
      console.log(index);
      switch (parseInt(index, 10)) {
        case 0:
          pageUrl = '/personal/set_center.html';
          break;
        case 1:
          pageUrl = '/personal/personal_index.html#/card';
          break;
        case 2:
          pageUrl = '/passport/login.html';
          break;
        default:
          break;
      }
      Common.jumpUrl(pageUrl);
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/personalBanner.scss";
</style>
