<template>
    <section class="ml-info-bar">
        <span class="label" v-text="labelTxt+'：'"></span>
        <span class="info-content" v-text="infoContent"></span>
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
    infoContent: {
      default() {
        return '';
      },
      type: String
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
    }
</style>
