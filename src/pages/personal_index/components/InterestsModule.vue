<template>
    <section class="ml-interest-module">
        <TitleBar txt="兴趣爱好"></TitleBar>
        <section class="ml-interest-list">
            <span class="interest-item" :style="createColor()">
                美食
            </span>
            <span class="interest-item" :style="createColor()">
                听音乐
            </span>
            <span class="interest-item" :style="createColor()">
                看电影
            </span>
            <span class="interest-item" :style="createColor()">
                综艺
            </span><span class="interest-item" :style="createColor()">
                读书
            </span>
            <span class="interest-item" :style="createColor()">
                登山
            </span>
            <span class="interest-item" :style="createColor()">
                旅游
            </span>
            <span class="interest-item" :style="createColor()">
                散步
            </span>
            <span class="interest-item" :style="createColor()">
                数码控
            </span>
            <span class="interest-more">
                <em></em>
                <em></em>
                <em></em>
            </span>

        </section>
    </section>
</template>
<script>
import TitleBar from './UserInfoTitle';
export default {
  components: {
    TitleBar
  },
  methods: {
    createColor() {
      const colorArr = ['247,181,1', '149,200,99', '255,81,83', '212,107,8', '64,169,255'];
      const selectColor = colorArr[Math.floor((Math.random() * colorArr.length))];
      const resultColor = { background: `rgba(${selectColor},.5)`, border: `.026667rem solid rgba(${selectColor},1)` };
      return resultColor;
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-interest-module{
        height: rem(294px);
        margin-bottom: rem(4px);
        background: #ffffff;
    }
    .ml-interest-list{
        padding: rem(48px) rem(40px) rem(28px) rem(40px);
        height: rem(128px);
        .interest-item{
            float: left;
            font-size:rem(28px);
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:#fff;
            height: rem(54px);
            line-height: rem(54px);
            padding: 0 rem(20px);
            margin: 0 rem(20px) rem(20px) 0;
        }
        .interest-more{
            float: left;
            width:rem(28px);
            height:rem(54px);
            background:rgba(236,236,236,1);
            border-radius:rem(6px);
            border:rem(2px) solid rgba(219,219,219,1);
            line-height: rem(54px);
            text-align: center;
            font-size: rem(44px);
            color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 rem(18px);
            em{
                width:rem(8px);
                height:rem(8px);
                border-radius: 50%;
                background: #ffffff;
                display: inline-block;
            }

        }
    }
</style>
