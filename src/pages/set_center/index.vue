<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-set-center">
            <LinkItem txt="关于我们"></LinkItem>
            <!--<LinkItem txt="修改密码"></LinkItem>-->
            <LinkItem txt="意见反馈" @click.native="jumpPage(0)"></LinkItem>
            <LinkItem txt="我要举报" @click.native="jumpPage(1)"></LinkItem>
        </section>
        <SureBtn txt="退出登录" @click.native="outLogin"></SureBtn>
    </section>
</template>

<script type="text/ecmascript-6">
import LinkItem from '@components/LinkItem.vue';
import SureBtn from '@components/SureBtn.vue';
import HeaderModule from '@components/HeaderModule.vue';
import Common from '@scripts/lib/common.js';
export default {
  components: {
    LinkItem,
    HeaderModule,
    SureBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '设置'
      }
    };
  },
  beforeMount() {
  },
  computed: {

  },
  methods: {
    jumpPage(index) {
      let pageUrl = '';
      console.log(index);
      switch (parseInt(index, 10)) {
        case 0:
          pageUrl = '/personal/personal_index.html?editTitle=反馈#/feedBack';
          break;
        case 1:
          pageUrl = '/personal/personal_index.html?editTitle=举报#/feedBack';
          break;
      }
      Common.jumpUrl(pageUrl);
    },
    outLogin() {
      const _this = this;
      _this.$confirm({
        title: '您确定要退出登录？',
        sureBack() {
          localStorage.clear();
          window.location.href = '/';
        }
      });
    }
  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/set_center/set_center.scss";
</style>
