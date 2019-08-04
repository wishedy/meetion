<template>
    <section class="ml-editPersonalCard">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="editPersonalCard">
            <HeadLogo></HeadLogo>
            <BgLogo></BgLogo>
            <EditInputBar txt="昵称" placeText="请输入您的昵称"></EditInputBar>
            <EditTextBar txt="爱情宣言" placeText="请输入您的爱情宣言"></EditTextBar>
        </section>
        <SureBtn txt="保存" class="save-btn"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import HeadLogo from './HeadLogo';
import BgLogo from './BgLogo';
import EditTextBar from './EditTextBar';
import EditInputBar from './EditInputBar';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    HeadLogo,
    EditTextBar,
    SureBtn,
    BgLogo,
    EditInputBar,
    CancelBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '资料编辑'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/EditPersonalCard.scss";
</style>
