<template>
    <section class="ml-upload">
        <figure class="logo">

        </figure>
        <p class="des" v-text="txt"></p>
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
    .ml-upload{
        width:rem(650px);
        height:rem(326px);
        background:rgba(246,246,246,1);
        border-radius:rem(12px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        &:nth-of-type(2){
            margin-top: rem(20px);
        }
        .logo{
            width:rem(190px);
            height:rem(130px);
            background:rgba(191,191,191,1);
        }
        &.ID-card-up{
            .logo{
                background: url("../../../assets/components/personal/ID-up.png") no-repeat center center/cover;
            }
        }
        &.ID-card-down{
            .logo{
                background: url("../../../assets/components/personal/ID-down.png") no-repeat center center/cover;
            }
        }
        .des{
            width: 100%;
            height:rem(28px);
            font-size:rem(20px);
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(142,142,147,1);
            line-height:rem(28px);
            margin-top: rem(40px);
            text-align: center;
        }
    }
</style>
