<template>
    <section class="ml-moreInfo-item">
        <span class="title" v-text="txt"></span>
        <span class="icon"></span>
    </section>
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
    .ml-moreInfo-item{
        height: rem(90px);
        margin-left: rem(32px);
        padding-right: rem(42px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: rem(4px) solid #F6F6F6;
        font-size:rem(32px);
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(68,68,68,1);
        .icon{
            width:rem(20px);
            height:rem(36px);
            background:rgba(232,232,232,1);
            background: url("../assets/components/personal/arrow.png") no-repeat center center/cover;
        }
    }
</style>
