<template>
    <section class="ml-publish" @click.stop="jumpPage"></section>
</template>
<script>
import Common from '@scripts/lib/common.js';
export default {
  props: {
    linkUrl: {
      default() {
        return '/publish_dynamic/publish_normal_dynamic.html';
      },
      type: String
    }
  },
  methods: {
    jumpPage() {
      const _this = this;
      Common.jumpUrl(_this.linkUrl);
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-publish{
        position: fixed;
        right: rem(48px);
        bottom:rem(146px);
        width: rem(96px);
        height: rem(96px);
        z-index: 2;
        background: url("../assets/components/dynamic/publish.png") no-repeat center center/cover;
    }
</style>
