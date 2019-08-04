<template>
    <section class="ml-personal-photo">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="photo-panel">
            <PublishImage></PublishImage>
        </section>
        <SureBtn txt="保存" class="save-btn"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
    </section>
</template>
<script>
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
        title: '个人影集'
      }
    };
  }
};
</script>
<style lang="scss">
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-personal-photo{
        min-height: 100vh;
        width: 100%;
        height: auto;
        background: #fff;
        .photo-panel{
            margin-bottom: rem(40px);
            margin-top: rem(118px);
            .ml-publish-image{
                padding: 0;
                .ml-publish-imageItem{
                    width: rem(250px);
                    height: rem(250px);
                    margin: 0;
                    border-radius: unset;
                    .image-content{
                        border-radius: unset;
                    }
                }

            }
        }
        .save-btn{
            margin-bottom: rem(20px);
        }
    }
</style>
