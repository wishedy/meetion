<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-input-container">
            <textarea name="" id="" cols="30" rows="10" class="text-input" placeholder="发布你的脱单内容吧，别忘了勾选下方的资料展示呦~"></textarea>
            <section class="select-list">
                <!--<span class="noData">
                    <i class="icon"></i>
                    <em>未选择展示信息</em>
                </span>-->
                <section class="select-data-item">
                    <i class="icon"></i>
                    <p>父母情况：父母健在，有一个妹妹</p>
                </section>
                <section class="select-data-item">
                    <i class="icon"></i>
                    <p>身高：185cm</p>
                </section>
                <section class="select-data-item">
                    <i class="icon"></i>
                    <p>QQ：2913388515</p>
                </section>
            </section>
        </section>
        <section class="select-container">
            <section class="select-item-bar">
                <section class="select-title active">
                    <h1 class="title">
                        <em>家庭</em>
                    </h1>
                    <section class="select-bar">
                        <i class="icon"></i>
                        <em>全选</em>
                    </section>
                </section>
                <section class="list-data">
                    <span class="interest-item selected">家庭成员</span>
                    <span class="interest-item">父母情况</span>
                    <span class="interest-item">父母职业</span>
                    <span class="interest-item selected">收入来源</span>
                </section>
            </section>
            <section class="select-item-bar">
                <section class="select-title">
                    <h1 class="title">
                        <em>个人</em>
                    </h1>
                    <section class="select-bar">
                        <i class="icon"></i>
                        <em>全选</em>
                    </section>
                </section>
                <section class="list-data">
                    <span class="interest-item selected">身高</span>
                    <span class="interest-item">体重</span>
                    <span class="interest-item">薪资</span>
                    <span class="interest-item selected">购房</span>
                    <span class="interest-item selected">购车</span>
                </section>
            </section>
            <section class="select-item-bar">
                <section class="select-title">
                    <h1 class="title">
                        <em>联系方式</em>
                    </h1>
                    <section class="select-bar">
                        <i class="icon"></i>
                        <em>全选</em>
                    </section>
                </section>
                <section class="list-data">
                    <span class="interest-item selected">QQ</span>
                    <span class="interest-item">微信</span>
                    <span class="interest-item">电话</span>
                    <span class="interest-item selected">E-mail</span>
                </section>
            </section>
        </section>
        <section class="ml-publishDynamic-publish">
            <PublishImage></PublishImage>
        </section>
        <SureBtn txt="发布" class="save-btn" style="margin-bottom: 0.26667rem;"></SureBtn>
        <CancelBtn txt="取消" class="cancel-btn"></CancelBtn>
    </section>
</template>

<script type="text/ecmascript-6">
import HeaderModule from '@components/HeaderModule.vue';
import PublishImage from '@components/PublishImage.vue';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    PublishImage,
    SureBtn,
    CancelBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '编辑动态'
      }
    };
  },
  beforeMount() {
  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">

    @import "@styles/pages/publish_alone_dynamic/publish_alone_dynamic.scss";
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .cancel-btn{
        margin-top: rem(20px);
    }
    .ml-input-container{
        margin-top: rem(118px);
        margin-right: rem(20px);
        margin-left: rem(20px);
        width:rem(646px);
        min-height:rem(230px);
        height: auto;
        background:rgba(255,255,255,1);
        border-radius:rem(12px);
        padding: rem(40px) rem(32px) rem(28px) rem(32px);
        .text-input{
            height: rem(174px);
            display: block;
            border: none;
            outline: none;
            resize: none;
            font-size:rem(32px);
            width: 100%;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(68,68,68,1);
            line-height:rem(44px);
            border-bottom: rem(2px) solid #D8D8D8;
            &::-webkit-input-placeholder { /* WebKit browsers */
                color:rgba(187,187,187,1);
                font-size:rem(32px);
                line-height:rem(44px);
            }
            &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color:rgba(187,187,187,1);
                font-size:rem(32px);
                line-height:rem(44px);
            }
            &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color:rgba(187,187,187,1);
                font-size:rem(32px);
                line-height:rem(44px);
            }
            &:-ms-input-placeholder { /* Internet Explorer 10+ */
                color:rgba(187,187,187,1);
                font-size:rem(32px);
                line-height:rem(44px);
            }
        }
        .select-list{
            padding-top: rem(18px);
            width: 100%;
            .noData{
                width:rem(184px);
                height:rem(42px);
                background:rgba(246,246,246,1);
                border-radius:rem(6px);
                font-size:rem(20px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,135,129,1);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .icon{
                    width: rem(22px);
                    height: rem(22px);
                    background: url("../../assets/components/dynamic/warn.png") no-repeat center center/cover;
                    margin-right:rem(4px);
                }
                em{
                    font-style: normal;
                }
            }
            .select-data-item{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: rem(8px);
                height:rem(36px);
                font-size:rem(26px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(68,68,68,1);
                line-height:rem(36px);
                padding-left: rem(10px);
                .icon{
                    width:rem(14px);
                    height:rem(14px);
                    background:rgba(255,68,57,0.3);
                    border-radius: 50%;
                    border:rem(2px) solid rgba(255,68,57,1);
                    margin-right: rem(12px);
                }
            }
        }

    }
    .select-container{
        width:rem(710px);
        min-height:rem(530px);
        height: auto;
        background:rgba(255,255,255,1);
        border-radius:rem(12px);
        margin-top: rem(20px);
        margin-left: rem(20px);
        margin-right: rem(20px);
        padding-top: rem(12px);
        .select-item-bar{
            background: #fff;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .select-title{
            width: rem(664px);
            height: rem(84px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 0 rem(22px) 0 rem(22px);
            border-bottom: rem(2px) solid #D8D8D8;
            .title{
                height:rem(44px);
                font-size:rem(32px);
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(68,68,68,1);
                line-height:rem(44px);
                padding-left: rem(14px);
                position: relative;
                em{
                    font-style: normal;
                }
                &:after{
                    position: absolute;
                    content:" ";
                    display: block;
                    width:rem(6px);
                    height:rem(30px);
                    background:linear-gradient(360deg,rgba(255,129,116,1) 0%,rgba(255,82,71,1) 100%);
                    border-radius:rem(5px);
                    top:rem(8px);
                    left: 0;
                }
            }
            .select-bar{
                height:rem(36px);
                font-size:rem(26px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:#CCCCCC;
                line-height:rem(36px);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                .icon{
                    display: inline-block;
                    width:rem(32px);
                    height:rem(32px);
                    border:rem(2px) solid rgba(204,204,204,1);
                    margin-right: rem(8px);
                    border-radius: 50%;
                }
                em{
                    font-style: normal;
                }
            }
            &.active{
                .select-bar{
                    height:rem(36px);
                    font-size:rem(26px);
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,136,130,1);
                    line-height:rem(36px);
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    .icon{
                        display: inline-block;
                        width:rem(32px);
                        height:rem(32px);
                        background:url("../../assets/components/dynamic/yes.png") no-repeat center center/cover;
                        margin-right: rem(8px);
                        border-radius: 50%;
                        border: none;
                    }
                    em{
                        font-style: normal;
                    }
                }
            }

        }
        .list-data{
            padding-bottom: rem(18px);
            padding-top: rem(22px);
            padding-left: rem(22px);
            .interest-item{
                float: left;
                font-size:rem(28px);
                font-family:PingFangSC-Semibold;
                font-weight:600;
                border-radius:rem(6px);
                border:rem(2px) solid rgba(255,122,109,1);
                height: rem(54px);
                color:rgba(255,135,129,1);
                line-height: rem(54px);
                padding: 0 rem(20px);
                margin: 0 rem(20px) rem(20px) 0;
                &:nth-last-of-type(1){
                    margin: 0;
                }
                &.selected{
                    color:rgba(255,255,255,1);
                    border:rem(2px) solid rgba(255,122,109,1);
                    background: rgba(255,122,109,1);
                }
                &.add-item{
                    border:rem(2px) solid rgba(219,219,219,1);
                    color:rgba(219,219,219,1);
                }
            }
        }
    }
    .ml-publishDynamic-publish{
        margin-bottom: rem(40px);
        margin-top: rem(20px);
    }

</style>
