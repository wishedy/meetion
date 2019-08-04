<template>
    <section class="ml-headLogo">
        <span class="label-name">背景图</span>
        <div class="logo-item">
            <!--<figure class="bg-logo"></figure>-->
            <p class="placeText">请选择一张照片</p>
            <span class="icon"></span>
        </div>
    </section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
    @function rem($px,$browser-default-font-size:75px){
        @return $px / $browser-default-font-size * 1rem;
    }
    .ml-headLogo{
        height: rem(136px);
        margin-left: rem(32px);
        padding-right: rem(42px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        bottom:rem(2px) solid #F6F6F6;
        .label-name{
            height:rem(44px);
            font-size:rem(32px);
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(68,68,68,1);
            line-height:rem(44px);
        }
        .logo-item{
            height:rem(86px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            .bg-logo{
                width:rem(150px);
                height:rem(84px);
                border-radius:rem(12px);
                background: url("https://dpic2.tiankong.com/lt/9v/QJ6170661618.jpg?x-oss-process=style/240h") no-repeat center center/cover;
                margin-left: rem(20px);
            }
            .placeText{
                width:rem(228px);
                height:rem(44px);
                font-size:rem(32px);
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(187,187,187,1);
                line-height:rem(44px);
                margin-right: rem(16px);
            }
            .icon{
                width:rem(20px);
                height:rem(36px);
                background:rgba(232,232,232,1);
                background: url("../../../assets/components/personal/arrow.png") no-repeat center center/cover;
            }
        }
    }
</style>
