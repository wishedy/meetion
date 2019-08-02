<template>
    <section class="ml-sure-btn" v-text="txt"></section>
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
    .ml-sure-btn{
        width:rem(656px);
        height:rem(84px);
        background:rgba(255,102,90,1);
        border-radius:rem(12px);
        line-height: rem(84px);
        text-align: center;
        font-size:rem(34px);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(255,255,255,1);
        margin-left: auto;
        margin-right: auto;
    }
</style>
