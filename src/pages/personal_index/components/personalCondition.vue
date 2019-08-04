<template>
    <section class="ml-link-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="link-list">
            <EditInputBar txt="身高" placeText="请输入您的身高"></EditInputBar>
            <EditInputBar txt="体重" placeText="请输入您的体重"></EditInputBar>
            <EditInputBar txt="薪资" placeText="请输入您的薪资"></EditInputBar>
            <EditInputBar txt="购房" placeText="请输入您的购房情况"></EditInputBar>
            <EditInputBar txt="购车" placeText="请输入您的购车情况"></EditInputBar>
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
        title: '个人状况'
      }
    };
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
