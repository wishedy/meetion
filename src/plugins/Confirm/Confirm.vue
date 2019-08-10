<template>
    <section class="ml-confirm" v-if="show" style="display: none;">
        <transition name="mybox">
        <section class="dialog" style="display: none;">
            <h1 class="title" v-text="title"></h1>
            <section class="submit-btn">
                <section class="ml-confirmModalCancelBtn" v-text="cancelTitle" @click.stop="closeDialog"></section>
                <section class="ml-confirmModalEnsureBtn" v-text="sureTitle" @click.stop = 'sureDialog'></section>
            </section>
        </section>
        </transition>
    </section>
</template>
<script>
import $ from 'jquery';
export default {
  methods: {
    closeDialog() {
      const _this = this;
      _this.show = false;
      _this.cancelBack && _this.cancelBack();
    },
    sureDialog() {
      const _this = this;
      _this.show = false;
      _this.sureBack && _this.sureBack();
    }
  },
  watch: {
    show(n) {
      console.log('改变le' + n);
      if (n) {
        setTimeout(() => {
          const element = $('.ml-confirm');
          element.fadeIn(100, () => {
            element.find('.dialog').fadeIn(500);
          });
        }, 300);
      }
    }
  },
  data() {
    return {
      title: '',
      cancelTitle: '',
      sureTitle: '',
      show: false
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-confirm{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        background:rgba(0,0,0,.3);
        .dialog{
            width:rem(540px);
            background:rgba(255,255,255,1);
            border-radius:rem(10px);
            position: absolute;
            left: 50%;
            margin-left: rem(-271px);
            top:50%;
            transform: translateY(-50%);
            .title{
                height: rem(68px);
                line-height: rem(68px);
                text-align: center;
                font-size:rem(32px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(68,68,68,1);
                padding: rem(20px) rem(50px);
                border-bottom: rem(2px) solid #e4e9ed;
            }
            .submit-btn{
                width:100%;
                height:rem(90px);
                margin-left: auto;
                margin-right: auto;
                line-height: rem(90px);
                text-align: center;
                font-size:rem(32px);
                font-family:PingFangSC-Semibold;
                font-weight:700;
                color: #ff665a;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .ml-confirmModalCancelBtn{
                    flex: 1;
                    height: 100%;
                    text-align: center;
                    border-right: rem(2px) solid #e4e9ed;
                }
                .ml-confirmModalEnsureBtn{
                    flex: 1;
                    text-align: center;
                }
            }
        }
    }
</style>
