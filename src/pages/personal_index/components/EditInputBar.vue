<template>
    <section class="ml-editInput">
        <span class="label-name" v-text="txt"></span>
        <figure class="input-bar">
            <input type="text" :placeholder="placeText" v-model="contentTxt" v-if="editOnOff">
            <div class="edit-bar" v-if="!editOnOff"></div>
        </figure>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
export default {
  props: {
    editOnOff: {
      default() {
        return true;
      },
      type: Boolean
    },
    txt: {
      default() {
        return '';
      },
      type: String
    },
    txtContent: {
      default() {
        return '';
      }
    },
    placeText: {
      default() {
        return '';
      }
    },
    type: String
  },
  watch: {
    contentTxt(n) {
      const _this = this;
      _this.$emit('onTxtChange', n);
    },
    txtContent(n) {
      console.log('有变化');
      const _this = this;
      _this.contentTxt = Common.nullString(n);
    }
  },
  mounted() {
    const _this = this;
    console.log(_this.txtContent + '------');
    _this.contentTxt = Common.nullString(_this.txtContent);
  },
  data() {
    return {
      contentTxt: ''
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px,$browser-default-font-size:75px){
        @return $px / $browser-default-font-size * 1rem;
    }
    .ml-editInput{
        height: rem(101px);
        margin-left: rem(32px);
        padding: 0 rem(40px) 0 0;
        border-bottom:rem(2px) solid #F6F6F6;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .label-name{
            height:rem(44px);
            font-size:rem(32px);
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(68,68,68,1);
            line-height:rem(44px);
        }
        .input-bar{
            width:rem(392px);
            height:rem(44px);
            font-size:rem(32px);
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(187,187,187,1);
            line-height:rem(44px);
            .edit-bar{
                outline: none;
                border: none;
                color:rgba(68,68,68,1);
                font-size:rem(32px);
                font-family:PingFangSC-Light;
                font-weight:300;
                line-height:rem(44px);
                text-align: right;
                float: right;
                width: 100%;
                height: 100%;
            }
            input{
                outline: none;
                border: none;
                color:rgba(68,68,68,1);
                font-size:rem(32px);
                font-family:PingFangSC-Light;
                font-weight:300;
                line-height:rem(44px);
                text-align: right;
                float: right;
                width: 100%;
                height: 100%;
                &::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
            }
        }
    }
</style>
