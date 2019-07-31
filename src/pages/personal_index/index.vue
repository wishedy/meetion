<template>
    <section class="ml-mainInner">
        <!--<HeaderModule :config="headerConfig"></HeaderModule>-->
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
        <div class="login_tip">
            <div class="loginTip_title">
                <span class="loginTip_iconLeft"></span>
                <span class="loginTip_title_text">欢迎登录</span>
                <span class="loginTip_iconR"></span>
                <span class="loginTip_close"></span>
            </div>
            <div class="loginTip_img"></div>
            <div class="loginInfo">
                <input type="number" class="loginInfo_input" placeholder="请输入您的账号" max="11" />
            </div>
            <div class="loginInfo">
                <input type="number" class="loginInfo_input" placeholder="请输入您的密码" max="11" />
            </div>
            <div class="loginInfo_style">
                <span class="loginInfo_styleTip">手机号登录</span>
                <span class="loginInfo_styleTip2">忘记密码？</span>
            </div>
            <div class="loginInfo_btn">开启遇见</div>
            <div class="loginOther">
                <p class="loginOther_register">快速注册</p>
                <div class="loginOther_three">
                    <span class="loginOther_line"></span>
                    <span class="loginOther_loginThree">第三方</span>
                    <span class="loginOther_line"></span>
                </div>
                <div class="loginOther_wx">
                    <span class="loginOther_wxImg"></span>
                </div>
                <div class="loginOther_userRead">
                    <span class="loginOther_readText">登录表示您同意 </span>
                    <span class="loginOther_readNote">《用户协议》</span>
                </div>
            </div>
        </div>
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
