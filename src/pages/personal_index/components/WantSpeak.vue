<template>
    <section class="ml-wantSpeak">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="speakContainer">
            <figure class="container">
                <textarea name="" id="" cols="30" rows="10" :placeholder="$route.name === 'speak'?'请输入您的爱情告白':'请输入您想对ta说的话'" v-model="txtContent"></textarea>
                <span class="num" :class="{'error':txtContent.length===maxNum}">{{txtContent.length}}/{{maxNum}}</span>
            </figure>
        </section>
        <SureBtn txt="保存" class="save-btn" @click.native="saveWord"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
import HeaderModule from '@components/HeaderModule.vue';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
import axios from 'axios';
export default {
  components: {
    HeaderModule,
    SureBtn,
    CancelBtn
  },
  data() {
    const _this = this;
    console.log(_this.$route.name);
    const cid = localStorage.getItem('customerId');
    const speakOnOff = _this.$route.name === 'speak';
    const headerTitle = _this.$route.name === 'speak' ? '我想说的话' : '我想对你说的话';
    return {
      headerConfig: {
        backOnOff: true,
        title: headerTitle
      },
      speakOnOff: speakOnOff,
      infoId: '',
      cid: cid,
      txtContent: '',
      maxNum: 60
    };
  },
  methods: {
    saveWord() {
      const _this = this;

      if (!Common.checkInvalid(_this.infoId)) {
        const params = {
          id: _this.infoId
        };
        if (_this.speakOnOff) {
          params.wantToSay = _this.txtContent;
        }
        else {
          params.wantToSayForYou = _this.txtContent;
        }
        axios.post('/api/informations/update', params)
          .then(function(response) {
            console.log(response);
            if (parseInt(response.data.code, 10) === 200) {
              _this.$toast('保存成功');
            }
            else {
              _this.$toast('获取信息失败');
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      else {
        _this.$toast('参数有误');
      }
    },
    getUserInfo() {
      const _this = this;
      axios.get('/api/informations/select', {
        params: {
          customerId: _this.cid
        }
      })
        .then(function(response) {
          console.log(response);
          if (parseInt(response.data.code, 10) === 200) {
            _this.infoId = Common.nullString(response.data.result.id);
            if (_this.speakOnOff) {
              _this.txtContent = Common.nullString(response.data.result.wantToSay);
            }
            else {
              _this.txtContent = Common.nullString(response.data.result.wantToSayForYou);
            }
          }
          else {
            _this.$toast('获取信息失败');
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    const _this = this;
    _this.getUserInfo();
  },
  watch: {
    txtContent(n) {
      const _this = this;
      console.log(n);
      if (n.length > _this.maxNum) {
        _this.txtContent = n.substring(0, _this.maxNum);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px,$browser-default-font-size:75px){
        @return $px / $browser-default-font-size * 1rem;
    }
    .ml-wantSpeak{
        background: #fff;
        width: 100%;
        height: 100vh;
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
        .save-btn{
            margin-bottom: rem(20px);
        }
    }
</style>
