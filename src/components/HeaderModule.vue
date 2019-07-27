<template>
<section class="ml-header-module">
    <span class="header-item">
        <i class="icon" v-if="config.backOnOff"></i>
    </span>
    <span class="header-item" v-text="config.title"></span>
    <span class="header-item"></span>
</section>
</template>
<script>
export default {
  props: {
    config: {
      default() {
        return {
          backOnOff: false,
          title: ''
        };
      },
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/headerBar.scss";
</style>
