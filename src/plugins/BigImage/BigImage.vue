<template>
    <transition name="fade" v-if="destroyOnOff">
        <div class="img-view" :style="{opacity: opacityNum}">
            <div class="close-img" @click.stop="hideBigImage">关闭</div>
            <section class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in bigImageData" :key="index">
                        <img :src="item.imageSrc" alt=""  :style="item.styleData">
                    </div>
                </div>
                <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
            </section>
        </div>
    </transition>
</template>
<script>
import Swiper from 'swiper';
export default {
  data() {
    return {
      opacityNum: 0,
      destroyOnOff: true,
      bigImageData: []
    };
  },
  mounted() {
    const _this = this;
    console.log('触发');
    /* eslint-disable no-new */;
    setTimeout(() => {
      new Swiper('.swiper-container', {
        autoplay: false, // 可选选项，自动滑动
        initialSlide: _this.index,
        zoom: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        on: {
          init() {
            _this.opacityNum = 1;
          }
        }
      });
    }, 500);
  },
  methods: {
    hideBigImage() {
      const _this = this;
      console.log('点击');
      _this.destroyOnOff = false;
    }
  }
};
</script>
<style lang="scss" scoped>
    @import '@styles/lib/swiper.scss';
    .fade-enter-active,.fade-leave-active {
        transition: all .2s linear;
        transform: translate3D(0, 0, 0);
    }
    .fade-enter,.fade-leave-active {
        transform: scale(.5,.5,.5);
    }
    .img-view {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top:0;
        left: 0;
        right: 0;
        bottom:0;
        z-index:100;
        background: #0a0a0a;
        .close-img{
            position: absolute;
            right: rem(30px);
            top:rem(30px);
            color: #fff;
            font-size: rem(32px);
            line-height: rem(32px);
            z-index: 2;
        }
        .swiper-container{
            position: absolute;
            top:0;
            right: 0;
            left: 0;
            bottom:0;
            .swiper-pagination{
                position: absolute;
                bottom:rem(30px);
                right:rem(30px);
                color:#fff;
                font-size: rem(32px);
            }
        }
    }
</style>
