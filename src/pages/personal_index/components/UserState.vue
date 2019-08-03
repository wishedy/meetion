<template>
    <section class="ml-state-panel onAudit"><!--login,passAudit-->
        <section class="state-logo"></section>
        <!--<p class="state-des">拒绝轻浮与盲目，只为遇见我的Ta~</p>-->
        <p class="state-des">王梓睿的审核信息已通过</p>
        <!--<section class="state-btn">立即登录</section>-->
        <section class="state-btn">查看我的审核状态</section>
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
    .ml-state-panel{
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
        &.login{
            .state-logo{
                margin-top: rem(102px);
                width: rem(350px);
                height: rem(322px);
                background: url("../../../assets/components/login/loginWarn.png") no-repeat center center/cover;
                margin-bottom: rem(44px);
            }
        }
        &.passAudit{
            .state-logo{
                margin-top: rem(102px);
                width: rem(342px);
                height: rem(288px);
                background: url("../../../assets/components/login/auditPass.png") no-repeat center center/cover;
                margin-bottom: rem(120px);
            }
        }
        &.onAudit{//正在审核，未提交
            .state-logo{
                margin-top: rem(102px);
                width: rem(330px);
                height: rem(258px);
                background: url("../../../assets/components/login/onAudit.png") no-repeat center center/cover;
                margin-bottom: rem(120px);
            }
        }
        &.rejectAudit{
            .state-logo{
                margin-top: rem(102px);
                width: rem(330px);
                height: rem(244px);
                background: url("../../../assets/components/login/rejectAudit.png") no-repeat center center/cover;
                margin-bottom: rem(120px);
            }
        }
    }
</style>
