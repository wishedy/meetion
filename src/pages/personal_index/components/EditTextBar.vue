<template>
    <section class="ml-editText">
        <section class="label-name" v-text="txt"></section>
        <figure class="text-container">
            <textarea name="" id="" cols="30" rows="10" :placeholder="placeText" v-model="contentTxt"></textarea>
        </figure>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
export default {
  props: {
    txt: {
      default() {
        return '';
      },
      type: String
    },
    placeText: {
      default() {
        return '';
      },
      type: String
    }
  },
  mounted() {
    const _this = this;
    console.log(_this.txtContent + '------');
    _this.contentTxt = Common.nullString(_this.txtContent);
  },
  watch: {
    contentTxt(n) {
      const _this = this;
      _this.$emit('onTxtChange', n);
    }
  },
  data() {
    return {
      contentTxt: ''
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-editText{
        width:rem(750px);
        height:rem(284px);
        background:rgba(255,255,255,1);
        .label-name{
            height: rem(86px);
            padding-left: rem(32px);
            line-height: rem(86px);
            font-size:rem(32px);
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(68,68,68,1);
        }
        .text-container{
            margin-left: rem(32px);
            margin-right: rem(40px);
            width:rem(626px);
            height:rem(134px);
            background:rgba(246,246,246,1);
            border-radius:rem(12px);
            padding: rem(12px) rem(24px);
            textarea{
                display: block;
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                resize: none;
                font-size:rem(32px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                background:rgba(246,246,246,1);
                color:rgba(68,68,68,1);
                line-height:rem(44px);
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
</style>
