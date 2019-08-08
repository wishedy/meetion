<template>
    <div class="errorTips" v-show="show" :style="posiStyle">
        <span class="icon"></span>
        <span  v-text="message" ></span>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'errorTips',
  data() {
    const headOnOff = $('.ml-header-module').length > 0;
    return {
      message: '',
      show: false,
      headOnOff: headOnOff
    };
  },
  computed: {
    posiStyle() {
      const _this = this;
      if (_this.headOnOff) {
        return { position: 'absolute', top: 118 / 75 + 'rem' };
      }
      else {
        return { position: 'absolute', top: '0' };
      }
    }
  }
};
</script>

<style lang='scss' scoped>
    .errorTips{
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width:rem(750px);
        height:rem(76px);
        line-height:rem(76px);
        background:rgba(255,220,217,1);
        font-size:rem(26px);
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,120,117,1);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .icon{
            width:rem(28px);
            height:rem(28px);
            margin-right: rem(8px);
            background: url("../../assets/components/plugins/warn.png") no-repeat center center/cover;
        }
    }
</style>
