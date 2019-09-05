<template>
    <div id="loading" v-if="show">
        <div class="color1"></div>
        <div class="color1"></div>
        <div class="color1"></div>
        <div class="color1"></div>
        <div class="color1"></div>
        <div class="color2"></div>
        <div class="color2"></div>
        <div class="color2"></div>
        <div class="color2"></div>
        <div class="color2"></div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    $item:30px;
    .color1{ background: #fbfbfb;}
    .color2{ background: #ff665a;}

    @-webkit-keyframes loadRotate{
        from{ -webkit-transform:rotateZ(0deg);}
        to{ -webkit-transform:rotateZ(360deg);}
    }
    @keyframes loadRotate{
        from{ transform:rotateZ(0deg);}
        to{ transform:rotateZ(360deg);}
    }

    #loading{ width: rem(50px); height: rem(50px); position: absolute; left:50%; top:50%; margin-left:rem(-25px); margin-top: rem(-25px); -webkit-animation:loadRotate 3s linear infinite; -webkit-animation-fill-mode:both; animation:loadRotate 3s linear infinite; animation-fill-mode:both;z-index: 101;}
    #loading div{ width: rem(10px); height:rem(15px); position: absolute;left:rem(20px); top:rem(18px); -webkit-transform:rotateZ(0) translateX(rem($item)) ; opacity: 1; border-radius: 50% 0; }
    #loading div:nth-child(2){-webkit-transform:rotateZ(36deg) translateX(rem($item)) ; opacity: 0.8; }
    #loading div:nth-child(3){-webkit-transform:rotateZ(72deg) translateX(rem($item)); opacity: 0.6; }
    #loading div:nth-child(4){-webkit-transform:rotateZ(108deg) translateX(rem($item)); opacity: 0.4;}
    #loading div:nth-child(5){-webkit-transform:rotateZ(144deg) translateX(rem($item)) ; opacity: 0.2;}

    #loading div:nth-child(6){-webkit-transform:rotateZ(180deg) translateX(rem($item)) ; opacity: 1; }
    #loading div:nth-child(7){-webkit-transform:rotateZ(216deg) translateX(rem($item)) ; opacity: 0.8; }
    #loading div:nth-child(8){-webkit-transform:rotateZ(252deg) translateX(rem($item)) ; opacity: 0.6; }
    #loading div:nth-child(9){-webkit-transform:rotateZ(288deg) translateX(rem($item)) ; opacity: 0.4; }
    #loading div:nth-child(10){-webkit-transform:rotateZ(324deg) translateX(rem($item)) ; opacity: 0.2; }
</style>
