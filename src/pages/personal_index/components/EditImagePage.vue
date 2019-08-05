<template>
    <section class="ml-editImage">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-editImage-panel">
            <EditInputBar txt="证件号" placeText="请输入您的证件号码"></EditInputBar>
            <section class="ml-editImage-list">
                <UploadImage class="ID-card-up" txt="请上传您的身份证正面照"></UploadImage>
                <UploadImage class="ID-card-down" txt="请上传您的身份证反面照"></UploadImage>
            </section>
            <SureBtn txt="保存" class="save-btn"></SureBtn>
            <CancelBtn txt="取消"></CancelBtn>
        </section>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import EditInputBar from './EditInputBar';
import UploadImage from './UploadImage';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    EditInputBar,
    UploadImage,
    SureBtn,
    CancelBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '身份证'
      }
    };
  }
};
</script>
<style lang="scss">
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-editImage{
        position: relative;
        height: 100vh;
        width: 100%;
        .ml-editImage-panel{
            margin-top: rem(126px);
            background: #fff;
            padding-bottom: rem(158px);
            .ml-editInput{
                border-bottom: none;
            }
            .ml-editImage-list{
                margin-bottom: rem(40px);
            }

        }
        .save-btn{
            margin-bottom: rem(20px);
        }
    }

</style>
