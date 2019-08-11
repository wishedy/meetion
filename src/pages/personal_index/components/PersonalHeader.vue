<template>
    <section class="ml-personal-header">
        <section class="header-module">
            <section class="header-item">
                <i class="icon"></i>
            </section>
            <section class="header-item">
                <i class="logo"></i>
                <em>可爱米其林</em>
            </section>
            <section class="header-item">
                <i class="icon"></i>
            </section>
        </section>
        <section class="ml-personal-tab">
            <section class="tab-item base-info" :class="{'active':tabIndex===0}" @click.stop="changeTab(0)">
                <em>基本资料</em>
            </section>
            <section class="tab-item audit" :class="{'active':tabIndex===1}" @click.stop="changeTab(1)">
                <em>审核信息</em>
            </section>
            <section class="tab-item publish" :class="{'active':tabIndex===2}" @click.stop="changeTab(2)">
                <em>个人发布</em>
            </section>
            <section class="tab-item message" :class="{'active':tabIndex===3}" @click.stop="changeTab(3)">
                <em>我的留言</em>
            </section>
        </section>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['tabIndex'])
  },
  methods: {
    ...mapActions(['changeTab'])
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-personal-header{
        height: rem(160px);
        position: fixed;
        top:0;
        z-index: 2;
        left: 0;
        right:0;
        .header-module{
            height:rem(84px);
            display: flex;
            flex-direction: row;
            align-items:flex-end;
            justify-content: center;
            background:linear-gradient(270deg,rgba(255,132,119,1) 0%,rgba(255,60,49,1) 100%);
            .header-item{
                height: rem(50px);
                display: inline-block;
                margin-bottom: rem(16px);
                &:nth-of-type(1){
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    .icon{
                        margin-left: rem(32px);
                        width: rem(42px);
                        height: rem(40px);
                        background: url("../../../assets/components/banner/Set.png") no-repeat center center/contain;
                        display: inline-block;
                    }
                }
                &:nth-of-type(2){
                    flex: 3;
                    height:rem(48px);
                    font-size:rem(34px);
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(255,255,255,1);
                    line-height:rem(48px);
                    letter-spacing:rem(1px);
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    .logo{
                        width:rem(50px);
                        height:rem(50px);
                        border:rem(2px) solid rgba(255,255,255,1);
                        display: inline-block;
                        background: url("https://webimg.quanjing.com/Recommend/1558459015894.jpg") no-repeat center center/cover;
                        border-radius: 50%;
                    }
                    em{
                        font-style: normal;
                        display: inline-block;
                    }
                }
                &:nth-of-type(3){
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    .icon{
                        display: inline-block;
                        margin-right: rem(30px);
                        width:rem(38px);
                        height:rem(36px);
                        background:url("../../../assets/components/banner/list.png") no-repeat center center/cover;
                    }
                }
            }
        }
        .ml-personal-tab{
            padding: 0 rem(62px);
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            height: rem(76px);
            background: #fff;
            box-shadow:0px rem(4px) rem(20px) rem(-2px) rgba(0,0,0,0.07);
            .tab-item{
                width: rem(106px);
                margin-bottom: rem(20px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                em{
                    font-style: normal;
                    height:rem(36px);
                    font-size:rem(26px);
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(102,102,102,1);
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
                        bottom:rem(-20px);
                    }
                }

            }
        }
    }

</style>
