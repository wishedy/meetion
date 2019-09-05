<template>
<section class="ml-header-module">
    <span class="header-item" @click.stop="reBack">
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
  },
  methods: {
    reBack() {
      const _this = this;
      _this.$emit('reBackCallBack');
      window.history.back();
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/headerBar.scss";
</style>
