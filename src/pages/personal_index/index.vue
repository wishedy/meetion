<template>
    <section class="ml-mainInner">
        <router-view></router-view>
    </section>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {},
  watch: {
    $route() {
      console.log('改变');
      this.editPanel(false);
    },
    tabIndex() {
      this.editPanel(false);
    }
  },
  computed: {
    ...mapGetters(['tabIndex'])
  },
  methods: {
    ...mapActions(['editPanel'])
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/personal_index/personal_index.scss";
</style>
