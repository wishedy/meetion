<template>
    <section class="ml-mainInner ml-publishDynamic">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="speakContainer">
            <figure class="container">
                <textarea name="" id="" cols="30" rows="10" placeholder="发布你想说的内容吧" v-model="contents"></textarea>
                <span class="num" :class="{'error':contents.length>maxLen}">{{maxLen-contents.length}}/{{maxLen}}</span>
            </figure>
        </section>
        <section class="ml-publishDynamic-publish">
            <PublishImage :insertList="insertList" @insertPhoto="insertPhoto" :publishMaxLen="publishMaxLen" @deleteItem="deleteItem"></PublishImage>
        </section>
        <SureBtn txt="发布" class="save-btn" @click.native="publish"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
        <section class="ml-publishAlone">我要遇见</section>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import PublishImage from '@components/PublishImage.vue';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
import Common from '@scripts/lib/common.js';
import PublishDynamic from '@scripts/lib/publishDynamic.js';
export default {
  components: {
    HeaderModule,
    PublishImage,
    SureBtn,
    CancelBtn
  },
  methods: {
    insertPhoto(url) {
      const _this = this;
      _this.insertList.push(url);
      console.log(_this.insertList);
    },
    deleteItem(index) {
      const _this = this;
      console.log(index);
      _this.insertList.splice(index, 1);
    },
    publish() {
      const _this = this;
      if (Common.checkInvalid(_this.contents)) {
        _this.$errorTips('请输入您发布的内容');
      }
      else {
        const publishData = {
          dynamicType: 3,
          contents: _this.contents
        };
        const photos = _this.insertList.join(',');
        if (!Common.checkInvalid(photos)) {
          publishData.photos = photos;
        }
        PublishDynamic.publish({
          data: publishData,
          success(data) {
            console.log(data);
          }
        });
      }
    }
  },
  watch: {
    contents(n) {
      const _this = this;
      return n.length > _this.maxLen ? (_this.contents = _this.contents.substring(0, _this.maxLen)) : '';
    }
  },
  data() {
    return {
      publishMaxLen: 9,
      maxLen: 50,
      insertList: [],
      contents: '',
      headerConfig: {
        backOnOff: true,
        title: '发布动态'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-publishDynamic{
        background: #fff;
        width: 100%;
        min-height: 100vh;
        height: auto;
        padding-bottom: rem(190px);
        .speakContainer{
            padding-top: rem(118px);
            margin-right: rem(20px);
            margin-left: rem(20px);
            margin-bottom: rem(40px);
            .container{
                width:rem(650px);
                height:rem(204px);
                padding: rem(28px) rem(30px);
                position: relative;
                background:rgba(246,246,246,1);
                border-radius: rem(12px);
                .num{
                    height:rem(36px);
                    font-size:rem(26px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    line-height:rem(36px);
                    position: absolute;
                    right: rem(50px);
                    bottom:rem(52px);
                    color: #8E8E93;
                    &.error{
                        color:rgba(255,102,90,1);
                    }
                }
                textarea{
                    display: block;
                    border: none;
                    outline: none;
                    resize: none;
                    font-size:rem(32px);
                    width: 100%;
                    height: 100%;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(68,68,68,1);
                    line-height:rem(44px);
                    background:rgba(246,246,246,1);
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
            }
        }
        .ml-publishAlone{
            width:rem(132px);
            height:rem(52px);
            border-radius:rem(200px) 0px 0px rem(200px);
            position: fixed;
            right: 0;
            top:rem(1200px);
            font-size:rem(28px);
            line-height: rem(52px);
            text-align: center;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            text-indent: rem(6px);
            background: url("../../assets/components/personal/personalBanner.png") no-repeat center center/cover;
        }
        .save-btn{
            margin-bottom: rem(20px);
        }
        .ml-publishDynamic-publish{
            margin-bottom: rem(40px);
        }
    }

</style>
