<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <div class="loginBox">
            <div class="loginBox_header">
                <div class="login_top">
                    <span class="login_icon_set"></span>
                    <span class="login_icon_option"></span>
                    <img src="" alt="" class="login_userImg">
                    <span class="login_btn">立即登录</span>
                </div>
                <div class="login_main">
                    <div class="login_main_item">
                        <span class="main_userInfo_icon"></span>
                        <span class="main_userInfo_text">基本信息</span>
                    </div>
                    <div class="login_main_item">
                        <span class="main_userInfo_icon"></span>
                        <span class="main_userInfo_text">审核信息</span>
                    </div>
                    <div class="login_main_item">
                        <span class="main_userInfo_icon"></span>
                        <span class="main_userInfo_text">个人发布</span>
                    </div>
                    <div class="login_main_item">
                        <span class="main_userInfo_icon"></span>
                        <span class="main_userInfo_text">我的留言</span>
                    </div>
                </div>
            </div>
            <div class="loginBox_footer">
                <div class="noLogin_img"></div>
                <div class="login_personalFlag">
                    <span class="login_personalFlag_text">拒绝轻浮与盲目，只为遇见我的Ta~</span>
                </div>
                <div class="loginBox_footer_btn">立即登录</div>
            </div>
        </div>
        <Tab :nav="navIndex"></Tab>
    </section>
</template>

<script type="text/ecmascript-6">
import HeaderModule from '@components/HeaderModule.vue';
import Tab from '@components/TabBar.vue';
export default {
  components: {
    HeaderModule,
    Tab
  },
  data() {
    return {
      headerConfig: {
        backOnOff: false,
        title: '个人中心首页'
      },
      navIndex: 2
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
    @import "@styles/pages/personal_index/personal_index.scss";
</style>
