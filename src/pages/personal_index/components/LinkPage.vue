<template>
    <section class="ml-link-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="link-list">
            <EditInputBar txt="QQ" placeText="请输入您的QQ号" @onTxtChange="onChangeTencent"></EditInputBar>
            <EditInputBar txt="微信" placeText="请输入您的微信" @onTxtChange="onChangeWechat"></EditInputBar>
            <EditInputBar txt="电话" placeText="请输入您的电话" @onTxtChange="onChangePhone"></EditInputBar>
            <EditInputBar txt="E-mail" placeText="请输入您的电子邮箱" @onTxtChange="onEmail"></EditInputBar>
            <EditTextBar txt="其他" placeText="请输入您其他需要补充的内容，为了让ta更了解你呦~"   @onTxtChange="onOtherChange"></EditTextBar>
        </section>
        <SureBtn txt="保存" class="save-btn"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import EditInputBar from './EditInputBar';
import EditTextBar from './EditTextBar';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    EditInputBar,
    EditTextBar,
    SureBtn,
    CancelBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '联系方式'
      }
    };
  },
  methods: {
    onChangeTencent(txt) {

    },
    onChangeWechat(txt) {

    },
    onChangePhone(txt) {

    },
    onEmail(txt) {

    },
    onOtherChange(txt) {

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
