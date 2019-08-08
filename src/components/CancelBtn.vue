<template>
    <section class="ml-cancalBtn" v-text="txt" @click.stop="reBack"></section>
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
  },
  methods: {
    reBack() {
      window.history.back();
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-cancalBtn{
        width:rem(652px);
        height:rem(80px);
        background:#fff;
        border-radius:rem(12px);
        line-height: rem(84px);
        text-align: center;
        font-size:rem(34px);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(255,102,90,1);
        border:rem(2px) solid rgba(255,102,90,1);
        margin-left: auto;
        margin-right: auto;
    }
</style>
