<template>
    <section class="ml-addInterest">
        <section class="dialog">
            <h1 class="title">添加您的兴趣标签</h1>
            <div class="closeBtn" @click.stop="closeAddInterest"></div>
            <div class="input-bar">
                <input type="text" placeholder="最多输入8个子">
            </div>
            <section class="submit-btn">确定</section>
        </section>
    </section>
</template>
<script>
import $ from 'jquery';
export default {
  methods: {
    closeAddInterest() {
      const element = $('.ml-addInterest');
      element.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-addInterest{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        background:rgba(0,0,0,0.4);
        .dialog{
            width:rem(542px);
            height:rem(360px);
            background:rgba(255,255,255,1);
            border-radius:rem(48px);
            position: absolute;
            left: 50%;
            margin-left: rem(-271px);
            top:rem(360px);
            .title{
                height: rem(108px);
                line-height: rem(108px);
                text-align: center;
                font-size:rem(32px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(68,68,68,1);
                margin-bottom: rem(32px);
            }
            .closeBtn{
                position: absolute;
                width:rem(24px);
                height:rem(24px);
                background: url("../../../assets/components/login/closeIcon.png") no-repeat center center/cover;
                right: rem(32px);
                top:rem(32px);
            }
            .input-bar{
                margin-left: rem(30px);
                margin-right: rem(28px);
                height: rem(54px);
                text-align: left;
                border-bottom: rem(4px) solid #F1F0F1;
                margin-bottom: rem(38px);
                input{
                    outline: none;
                    border: none;
                    color:rgba(68,68,68,1);
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    line-height:rem(54px);
                    text-align: left;
                    float: right;
                    width: 100%;
                    height: 100%;
                    &::-webkit-input-placeholder { /* WebKit browsers */
                        font-size:rem(28px);
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(187,187,187,1);
                        line-height:rem(54px);
                        text-align: left;
                    }
                    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                        font-size:rem(28px);
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(187,187,187,1);
                        line-height:rem(54px);
                        text-align: left;
                    }
                    &::-moz-placeholder { /* Mozilla Firefox 19+ */
                        font-size:rem(28px);
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(187,187,187,1);
                        line-height:rem(54px);
                        text-align: left;
                    }
                    &:-ms-input-placeholder { /* Internet Explorer 10+ */
                        font-size:rem(28px);
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(187,187,187,1);
                        line-height:rem(54px);
                        text-align: left;
                    }
                }
            }
            .submit-btn{
                width:rem(454px);
                height:rem(88px);
                background:linear-gradient(90deg,rgba(255,176,164,1) 0%,rgba(255,120,107,1) 100%);
                box-shadow:0px rem(4px) rem(20px) rem(-4px) rgba(255,127,115,1);
                border-radius:rem(44px);
                margin-left: auto;
                margin-right: auto;
                line-height: rem(88px);
                text-align: center;
                font-size:rem(34px);
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(255,255,255,1);
            }
        }
    }
</style>
