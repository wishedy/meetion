<template>
    <section class="ml-love-words">
        <TitleBar :txt="title"></TitleBar>
        <article class="ml-loveWords-content"  v-text="words"></article>
        <div class="slide">展开</div>
    </section>
</template>
<script>
import TitleBar from './UserInfoTitle';
export default {
  props: {
    title: {
      default() {
        return '';
      },
      type: String
    },
    words: {
      default() {
        return '';
      }
    }
  },
  components: {
    TitleBar
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-love-words{
        height: rem(338px);
        width: 100%;
        background: #fff;
        position: relative;
        margin-bottom: rem(4px);
        .ml-loveWords-content{
            margin: 0 auto;
            width:rem(622px);
            height:rem(138px);
            background:rgba(246,246,246,1);
            border-radius:rem(12px);
            padding: rem(14px) rem(20px) rem(28px) rem(20px);
            font-size:rem(28px);
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:rem(40px);
            letter-spacing: rem(2px);
        }
        .slide{
            position: absolute;
            right: rem(38px);
            bottom:rem(14px);
            font-size:rem(28px);
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:rem(40px);

        }
    }
</style>
