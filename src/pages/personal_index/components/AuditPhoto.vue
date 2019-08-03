<template>
    <section class="ml-audit-photo">
        <article class="ml-photo-item">
               <figure class="upload-image">
                   <i class="icon"></i>
                   <em>上传照片</em>
               </figure>
               <span class="ml-side-title" v-if="photoNum>1">正面</span>
               <p class="ml-audit-job" v-if="jobOnOff">
                   请上传能够直观证明您职业身份的图片（例如：企业邮箱、工作牌等）
               </p>
        </article>
        <article class="ml-photo-item" v-if="photoNum>1">
            <figure class="upload-image">
                <i class="icon"></i>
                <em>上传照片</em>
            </figure>
            <span class="ml-side-title" v-if="photoNum>1">反面</span>
        </article>
    </section>
</template>
<script>
export default {
  props: {
    photoNum: {
      default() {
        return 0;
      },
      type: String || Number
    },
    jobOnOff: {
      default() {
        return false;
      },
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-audit-photo{
        padding: 0 rem(76px) rem(20px) rem(76px);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .ml-photo-item{
            .upload-image{
                width:rem(280px);
                height:rem(158px);
                background:rgba(245,246,248,1);
                border-radius:rem(12px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .icon{
                    width:rem(62px);
                    height:rem(52px);
                    background:url("../../../assets/components/personal/camera.png") no-repeat center center/cover;
                }
                em{
                    font-style: normal;
                    width:rem(114px);
                    height:rem(40px);
                    font-size:rem(28px);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(142,142,147,1);
                    line-height:rem(40px);
                    text-align: center;
                    margin-top: rem(12px);
                }
            }
            .ml-side-title{
                margin-top: rem(8px);
                width: rem(280px);
                text-align: center;
                color:rgba(102,102,102,1);
                font-size:rem(28px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                display: block;
            }
            .ml-audit-job{
                width:rem(326px);
                height:rem(56px);
                font-size:rem(20px);
                font-family:PingFangSC-Light;
                font-weight:rem(300px);
                color:rgba(112,112,112,1);
                line-height:rem(28px);
                margin-top: rem(20px);
            }
            &:nth-of-type(2){
                margin-left: rem(32px);
            }
        }

    }
</style>
