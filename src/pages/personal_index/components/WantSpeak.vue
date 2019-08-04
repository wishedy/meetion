<template>
    <section class="ml-wantSpeak">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="speakContainer">
            <figure class="container">
                <textarea name="" id="" cols="30" rows="10" placeholder="说说您想对ta说的话"></textarea>
                <span class="num">50/50</span>
            </figure>
        </section>
        <SureBtn txt="保存" class="save-btn"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    SureBtn,
    CancelBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '我想说的话'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px,$browser-default-font-size:75px){
        @return $px / $browser-default-font-size * 1rem;
    }
    .ml-wantSpeak{
        background: #fff;
        width: 100%;
        height: 100vh;
        .speakContainer{
            padding-top: rem(118px);
            margin-right: rem(20px);
            margin-left: rem(20px);
            margin-bottom: rem(40px);
            .container{
                width:rem(650px);
                height:rem(204px);
                padding: rem(28px) rem(30px);
                position: relative;
                background:rgba(246,246,246,1);
                border-radius: rem(12px);
                .num{
                    height:rem(36px);
                    font-size:rem(26px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    line-height:rem(36px);
                    position: absolute;
                    right: rem(50px);
                    bottom:rem(52px);
                    color: #8E8E93;
                    &.error{
                        color:rgba(255,102,90,1);
                    }
                }
                textarea{
                    display: block;
                    border: none;
                    outline: none;
                    resize: none;
                    font-size:rem(32px);
                    width: 100%;
                    height: 100%;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(68,68,68,1);
                    line-height:rem(44px);
                    background:rgba(246,246,246,1);
                    &::-webkit-input-placeholder { /* WebKit browsers */
                        color:rgba(187,187,187,1);
                        font-size:rem(32px);
                        line-height:rem(44px);
                    }
                    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                        color:rgba(187,187,187,1);
                        font-size:rem(32px);
                        line-height:rem(44px);
                    }
                    &::-moz-placeholder { /* Mozilla Firefox 19+ */
                        color:rgba(187,187,187,1);
                        font-size:rem(32px);
                        line-height:rem(44px);
                    }
                    &:-ms-input-placeholder { /* Internet Explorer 10+ */
                        color:rgba(187,187,187,1);
                        font-size:rem(32px);
                        line-height:rem(44px);
                    }
                }
            }
        }
        .save-btn{
            margin-bottom: rem(20px);
        }
    }
</style>
