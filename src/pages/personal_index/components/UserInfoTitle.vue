<template>
    <section class="baseInfo-title" v-text="txt"></section>
</template>
<script>
export default {
  props: {
    txt: {
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
    .baseInfo-title{
        width:rem(346px);
        height:rem(50px);
        font-size:rem(36px);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(68,68,68,1);
        line-height:rem(50px);
        padding-top: rem(20px);
        padding-left: rem(32px);
        padding-bottom: rem(20px);
    }
</style>
