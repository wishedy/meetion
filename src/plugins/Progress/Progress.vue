<template>
    <div class="mask">
    <div class="toastMessageBox">{{message}}</div>
    </div>
</template>

<script>
export default {
  name: 'toastMessage',
  data() {
    return {
      message: '',
      show: false
    };
  }
};
</script>

<style lang='scss' scoped>
    .mask{
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
    }
    .toastMessageBox{
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: rem(16px);
        width: rem(140px);
        height: rem(140px);
        line-height: rem(140px);
        font-size: rem(32px);
        border-radius: rem(16px);
        text-align: center;
    }
</style>
