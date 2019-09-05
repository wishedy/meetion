<template>
    <transition name="fade">
        <div class="img-view" v-if="destroyOnOff">
            <div class="close-img" @click.stop="hideBigImage">关闭</div>
            <section class="swiper-container" style="opacity: 0;">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" :class="{'swiper-slide-prev':(index+1)===localIndex,'swiper-slide-active':index===localIndex,'swiper-slide-next':(index-1)===localIndex}" v-for="(item,index) in imageArr" :key="index" v-if="(imageArr.length===onLoadNum)">
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
import $ from 'jquery';
export default {
  data() {
    return {
      destroyOnOff: true,
      imageArr: [],
      onLoadNum: 0,
      localIndex: -2
    };
  },
  watch: {
    imageArr(n) {
      console.log(n.length);
      const _this = this;
      for (let num = 0; num < n.length; num++) {
        _this.checkImage(num, n[num]);
      }
    },
    onLoadNum(n) {
      const _this = this;
      console.log(n, _this.imageArr.length);
      if (n > 1 && n === _this.imageArr.length) {
        /* eslint-disable no-new */;
        setTimeout(() => {
          console.log(_this.localIndex);
          new Swiper('.swiper-container', {
            autoplay: false, // 可选选项，自动滑动
            initialSlide: _this.localIndex,
            zoom: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
            },
            on: {
              init() {
                _this.$loading.hideLoading();
                $('.swiper-container').css({ opacity: 1 });
              }
            }
          });
        }, 800);
      }
    }
  },
  mounted() {
    const _this = this;
    _this.$loading.showLoading();
  },
  methods: {
    checkImage(index, item) {
      const _this = this;
      const heavyImage = new Image();
      heavyImage.src = item.imageSrc;
      heavyImage.onload = (e) => {
        console.log('width:' + heavyImage.width + ',height:' + heavyImage.height);
        const imgW = heavyImage.width;
        const imgH = heavyImage.height;
        const windowElement = $('.img-view');
        const centerW = windowElement.width();
        const centerH = windowElement.height();
        const i = (centerW / centerH - imgW / imgH) > 0 ? 0 : 1;
        var rectWidth, rectHeight = 0;
        if (i === 1) {
          // 如果窗口宽不长，高长。以宽为准。
          if (centerW > imgW) {
            rectWidth = imgW;
          }
          else {
            rectWidth = centerW;
          }
          rectHeight = rectWidth / (imgW / imgH);
        }
        else if (i === 0) {
          // 如果窗口宽足够长，高不长。以高为准。
          if (centerH > imgH) {
            rectHeight = imgH;
          }
          else {
            rectHeight = centerH;
          }
          rectWidth = rectHeight * (imgW / imgH);
        }
        _this.imageArr[index].styleData = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: rectWidth + 'px',
          height: rectHeight + 'px',
          'margin-left': -rectWidth / 2 + 'px',
          'margin-top': -rectHeight / 2 + 'px'
        };
        _this.onLoadNum++;
        console.log(_this.imageArr[index]);
      };
    },
    hideBigImage() {
      const _this = this;
      console.log('点击');
      _this.destroyOnOff = false;
      _this.$destroy(true);
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
        transform: translate3D(100%, 0, 0);
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
