<template>
    <section class="sign" @click.stop="showEditPanel">
        <i class="icon"></i>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['editPanel']),
    showEditPanel() {
      const _this = this;
      _this.editPanel(true);
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .sign {
        width: rem(96px);
        height: rem(96px);
        border-radius: 50%;
        background:linear-gradient(323deg,rgba(255,124,124,1) 0%,rgba(255,165,165,1) 100%);
        box-shadow:0px rem(4px) rem(20px) rem(-2px) rgba(0,0,0,0.07);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: fixed;
        right: rem(48px);
        bottom:rem(166px);
        z-index: 1;
        .icon {
            width: rem(46px);
            height: rem(46px);
            background: url("../../../assets/components/topic/all_edit.png") no-repeat center center/cover;
        }
    }
</style>
