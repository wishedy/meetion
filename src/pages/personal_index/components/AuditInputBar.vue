<template>
    <section class="ml-audit-input">
        <span class="label">证件号</span>
        <figure class="input-item">
            <input type="text" placeholder="请输入您的证件号">
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
    .ml-audit-input{
        height: rem(44px);
        margin-left: rem(60px);
        margin-right: rem(40px);
        padding: rem(26px) 0;
        margin-bottom: rem(26px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .label{
            height:rem(44px);
            font-size:rem(32px);
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(68,68,68,1);
            line-height:rem(44px);
        }
        .input-item{
            width: rem(400px);
            height: rem(44px);
            input{
                outline: none;
                border: none;
                color:rgba(68,68,68,1);
                font-size:rem(32px);
                font-family:PingFangSC-Light;
                font-weight:300;
                line-height:rem(44px);
                text-align: right;
                float: right;
                width: 100%;
                height: 100%;
                &::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:rem(32px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(187,187,187,1);
                    line-height:rem(44px);
                    text-align: right;
                }
            }
        }
    }
</style>
