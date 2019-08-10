<template>
    <section class="ml-info-bar">
        <span class="label" v-text="labelTxt+'：'"></span>
        <span class="info-content" v-html="infoContent" v-if="!inputOnOff"></span>
        <figure class="info-input" v-if="inputOnOff">
            <input type="text" class="input-item" placeholder="请输入内容" v-model="contentTxt">
        </figure>
    </section>
</template>
<script>
export default {
  props: {
    labelTxt: {
      default() {
        return '';
      },
      type: String
    },
    inputOnOff: {
      default() {
        return 0;
      }
    },
    infoContent: {
      default() {
        return '';
      },
      type: String
    }
  },
  data() {
    return {
      contentTxt: ''
    };
  },
  mounted() {
    const _this = this;
    _this.contentTxt = _this.infoContent;
  },
  watch: {
    contentTxt(n) {
      const _this = this;
      _this.$emit('onTxtChange', n);
    },
    infoContent(n) {
      const _this = this;
      _this.contentTxt = n;
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-info-bar{
        height: rem(100px);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size:rem(32px);
        font-family:PingFangSC-Light;
        font-weight:300;
        color:rgba(75,75,75,1);
        line-height:rem(100px);
        text-align: left;
        border-bottom: rem(2px) solid #f6f6f6;
        margin-left: rem(40px);
        margin-right: rem(30px);
        .info-input{
            width: rem(300px);
            text-align: left;
            height:rem(100px);
            input{
                width: rem(400px);
                text-align: left;
                outline: none;
                border: none;
                color:rgba(68,68,68,1);
                font-size:rem(32px);
                font-family:PingFangSC-Light;
                font-weight:300;
                line-height:rem(100px);
                width: 100%;
                height: 100%;
                &::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(100px);
                    text-align: left;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(100px);
                    text-align: left;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(100px);
                    text-align: left;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: left;
                }
            }
        }
    }
</style>
