<template>
    <section class="ml-personal-tab">
        <section class="tab-item base-info active">
            <i class="icon"></i>
            <em>基本资料</em>
        </section>
        <section class="tab-item audit">
            <i class="icon"></i>
            <em>审核信息</em>
        </section>
        <section class="tab-item publish">
            <i class="icon"></i>
            <em>个人发布</em>
        </section>
        <section class="tab-item message">
            <i class="icon"></i>
            <em>我的留言</em>
        </section>
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
    .ml-personal-tab{
        padding: 0 rem(62px);
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        height: rem(160px);
        background: #fff;
        margin-top: rem(20px);
        margin-bottom: rem(20px);
        .tab-item{
            width: rem(106px);
            margin-bottom: rem(24px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            em{
                font-style: normal;
                margin-top: rem(12px);
                height:rem(36px);
                font-size:rem(26px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(102,102,102,1);
            }
            .icon{
                display: block;
            }
            &.base-info{
                .icon{
                  width: rem(50px);
                  height: rem(50px);
                  background: #fff url("../../../assets/components/banner/baseInfo.png") no-repeat center center/cover;
                }
            }
            &.audit{
                .icon{
                    width: rem(40px);
                    height: rem(50px);
                    background: #fff url("../../../assets/components/banner/audit.png") no-repeat center center/cover;
                }
            }
            &.publish{
                .icon{
                    width: rem(50px);
                    height: rem(46px);
                    background: #fff url("../../../assets/components/banner/publish.png") no-repeat center center/cover;
                }
            }
            &.message{
                .icon{
                    width: rem(46px);
                    height: rem(50px);
                    background: #fff url("../../../assets/components/banner/message.png") no-repeat center center/cover;
                }
            }
            &.active{
                em{
                    color: #FFA298;
                }
                position: relative;
                &:after{
                    content: " ";
                    position: absolute;
                    width:rem(104px);
                    height:rem(6px);
                    background:rgba(255,162,152,1);
                    border-radius:rem(4px);
                    bottom:rem(-24px);
                }
            }

        }
    }
</style>
