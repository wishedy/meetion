<template>
    <section class="ml-link-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="link-list">
            <EditInputBar txt="QQ" placeText="请输入您的QQ号" @onTxtChange="changeQqNum"></EditInputBar>
            <EditInputBar txt="微信" placeText="请输入您的微信" @onTxtChange="changeWechatNum"></EditInputBar>
            <EditInputBar txt="电话" placeText="请输入您的电话" @onTxtChange="changePhoneNum"></EditInputBar>
            <EditInputBar txt="E-mail" placeText="请输入您的电子邮箱" @onTxtChange="changeEmail"></EditInputBar>
            <EditTextBar txt="其他" placeText="请输入您其他需要补充的内容，为了让ta更了解你呦~"   @onTxtChange="changeLink"></EditTextBar>
        </section>
        <SureBtn txt="保存" class="save-btn" @click.native="saveInfo"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import EditInputBar from './EditInputBar';
import EditTextBar from './EditTextBar';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
import { createNamespacedHelpers } from 'vuex'
import Common from '@scripts/lib/common.js';
import RegularTest from '@scripts/lib/regularTest.js';
import axios from 'axios';
export default {
  components: {
    HeaderModule,
    EditInputBar,
    EditTextBar,
    SureBtn,
    CancelBtn
  },
  data() {
      let cid = localStorage.getItem("customerId");
    return {
      headerConfig: {
        backOnOff: true,
        title: '联系方式'
      },
        'cid':cid,
        'qqNum':"",
        'weChatNum':"",
        'phoneNum':"",
        'email':"",
        'otherNum':"",
        'editQqNum':"",
        'editWeChatNum':"",
        'editPhoneNum':"",
        'editEmail':"",
        'editOtherNum':""
    };
  },
    methods:{
        reBackCallBack(){
          let _this = this;
            _this.editQqNum = "";
            _this.editWeChatNum = "";
            _this.editPhoneNum = "";
            _this.editEmail = "";
            _this.editOtherNum = "";
        },
        getLinkInfo(){
          let _this = this;
            axios.get('/api/contact/select', {
                params: {
                    customerId: _this.cid
                }
            })
                .then(function (response) {
                    console.log(response);
                    if (parseInt(response.data.code, 10) === 200) {
                        _this.weChatNum = response.data.result.wechatAccount;
                        _this.phoneNum = response.data.result.wechatAccount;
                        _this.email = response.data.result.wechatAccount;
                        _this.qqNum = response.data.result.qqAccount;
                        _this.otherNum = response.data.result.wechatAccount;
                    }
                    else {
                        alert('登录失败');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        saveInfo(){
            let  _this = this;
            let checkOnOff = true;
            if(!Common.checkInvalid(_this.editQqNum)){//qq号非空
                if(!RegularTest.testNum(_this.editQqNum)){
                    alert('请输入正确的QQ号');
                    checkOnOff = false;
                }
            }
            if(!Common.checkInvalid(_this.editWeChatNum)){//微信号非空
                if(!RegularTest.testWeChat(_this.editWeChatNum)){
                    alert("请输入正确的微信号");
                    checkOnOff = false;
                }
            }
            if(!Common.checkInvalid(_this.editPhoneNum)){//手机号非空
                if(!RegularTest.testPhoneNum(_this.editPhoneNum)){
                    alert("请输入正确的手机号");
                    checkOnOff = false;
                }
            }
            if(!Common.checkInvalid(_this.editEmail)){//email号非空
                if(!RegularTest.testEmail(_this.editEmail)){
                    alert("请输入正确的email");
                    checkOnOff = false;
                }
            }
            if(!Common.checkInvalid(_this.editOtherNum)){//email号非空

            }
            if(checkOnOff){
                //通过校验，提交信息
                axios.post('/api/contact/update', {
                    id: _this.cid,
                    wechatAccount: _this.editWeChatNum,
                    qqAccount:_this.editQqNum,
                    email:_this.editEmail,
                    weiboAccount:"",
                    otherAccount:_this.editOtherNum
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        changeQqNum(txt){
            let _this = this;
            _this.editQqNum = txt;
        },
        changeWechatNum(txt){
            let _this = this;
            _this.editWeChatNum = txt;
        },
        changePhoneNum(txt){
            let _this = this;
            _this.editPhoneNum = txt;
        },
        changeEmail(txt){
            let _this = this;
            _this.editEmail = txt;
        },
        changeLink(txt){
            let _this = this;
            _this.editOtherNum = txt;
        }
    }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .link-list{
        background: #fff;
        margin-top: rem(118px);
        margin-bottom: rem(40px) ;
    }
    .save-btn{
        margin-bottom: rem(20px);
    }
</style>
