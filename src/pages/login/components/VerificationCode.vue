<template>
    <section class="ml-code-module">
        <section class="ml-verification-code">
            <figure class="ml-input-bar">
                <input type="text" class="ml-input-item" placeholder="请输入您的验证码">
            </figure>
            <div class="ml-code-time">
                获取验证码
            </div>
        </section>
        <div class="ml-residue-num">
            今日还剩余2次
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-residue-num{
        width: 100%;
        text-align: right;
        height:rem(36px);
        font-size:rem(26px);
        font-family:PingFangSC-Light;
        font-weight:300;
        color:rgba(176,176,179,1);
        line-height:rem(36px);
    }
    .ml-verification-code{
        width: rem(630px);
        height: rem(98px);
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        border-bottom: rem(2px) solid #F1F0F1;
        margin-bottom: rem(32px);
        .ml-input-bar{
            width: rem(400px);
            text-align: left;
            line-height:rem(40px);
            margin-bottom: rem(16px);
            .ml-input-item{
                outline: none;
                border:none;
                width: 100%;
                height: 100%;
                text-align: left;
                &::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: left;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: left;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: left;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(221,221,221,1);
                    line-height:rem(40px);
                    text-align: left;
                }
            }
        }
        .ml-code-time{
           width: rem(150px);
            height: rem(64px);
            margin-bottom: rem(16px);
            border-left: rem(2px) solid #E7E7E7;
            padding-left: rem(20px);
            font-size:rem(28px);
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(68,68,68,1);
            text-align: center;
            line-height: rem(64px);
        }
    }
</style>
