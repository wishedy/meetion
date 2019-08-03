<template>
    <section class="ml-audit-title">
        <span class="title">
            <em v-text="autitTitle"></em>
            <i class="icon"></i>
        </span>
    </section>
</template>
<script>
export default {
  props: {
    autitTitle: {
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
    .ml-audit-title{
        margin-left: rem(36px);
        height: rem(104px);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        border-bottom:rem(2px) solid #f6f6f6;
        .title{
            height:rem(44px);
            font-size:rem(32px);
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(68,68,68,1);
            line-height:rem(44px);
            margin-bottom: rem(20px);
            position: relative;
            padding-left: rem(14px);
            em{
                font-style: normal;
            }
            .icon{
                position: absolute;
                width:rem(6px);
                height:rem(30px);
                background:linear-gradient(360deg,rgba(255,129,116,1) 0%,rgba(255,82,71,1) 100%);
                border-radius:rem(5px);
                top:50%;
                margin-top: rem(-15px);
                left: 0;
            }
        }
    }
</style>
