<template>
    <section class="ml-inputPhone">
        <div class="ml-num-sign">
            <i class="sign-num">+86</i>
            <em class="icon"></em>
        </div>
        <figure class="ml-input-bar">
            <input type="text" class="ml-input-item" placeholder="请输入您的手机号">
        </figure>
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
    .ml-inputPhone{
        width: rem(630px);
        height: rem(98px);
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        border-bottom: rem(2px) solid #F1F0F1;
        .ml-num-sign{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            height:rem(40px);
            margin-bottom: rem(16px);
            .sign-num{
                margin-left: rem(10px);
                height:rem(40px);
                font-size:rem(28px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(68,68,68,1);
                line-height:rem(40px);
            }
            .icon{
                width: rem(14px);
                height: rem(24px);
                margin-left: rem(10px);
                background: url("../../../assets/components/login/right.png") no-repeat center center/cover;
            }
        }
        .ml-input-bar{
            width: auto;
            min-width: rem(500px);
            height:rem(40px);
            font-size:rem(28px);
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(68,68,68,1);
            text-align: right;
            line-height:rem(40px);
            margin-bottom: rem(16px);
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .ml-input-item{
                outline: none;
                border:none;
                width: 100%;
                height: 100%;
                &::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: right;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: right;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: right;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: right;
                }
            }
        }
    }
</style>
