<template>
    <section class="ml-none-data">
        <section class="state-logo"></section>
        <p class="state-des">暂无留言</p>
        <section class="state-btn">邀请Ta发布第一条动态</section>
    </section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-none-data{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        .state-des{
            width:rem(446px);
            height:rem(40px);
            font-size:rem(28px);
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(142,142,147,1);
            line-height:rem(40px);
            margin-bottom: rem(30px);
            text-align: center;
        }
        .state-btn{
            height:rem(62px);
            padding: 0 rem(26px);
            background:rgba(255,255,255,1);
            border-radius:rem(12px);
            font-size:rem(28px);
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(68,68,68,1);
            line-height: rem(62px);
        }
        .state-logo{
            margin-top: rem(102px);
            width: rem(330px);
            height: rem(314px);
            background: url("../../../assets/components/login/noData.png") no-repeat center center/cover;
            margin-bottom: rem(44px);
        }
    }
</style>
