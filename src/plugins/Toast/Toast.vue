<template>
  <div class="toastMessageBox" v-show="show">{{message}}</div>
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
  .toastMessageBox{
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: rem(16px);
    font-size: rem(32px);
    border-radius: rem(16px);
    text-align: center;
  }
</style>
