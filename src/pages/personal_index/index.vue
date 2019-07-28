<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <Tab :nav="navIndex"></Tab>
    </section>
</template>

<script type="text/ecmascript-6">
import HeaderModule from '@components/HeaderModule.vue';
import Tab from '@components/TabBar.vue';
export default {
  components: {
    HeaderModule,
    Tab
  },
  data() {
    return {
      headerConfig: {
        backOnOff: false,
        title: '个人中心首页'
      },
      navIndex: 2
    };
  },
  beforeMount() {
  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/personal_index/personal_index.scss";
</style>
