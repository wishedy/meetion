<template>
    <section class="ml-mainInner">
        <TopHeader :nav="navIndex"></TopHeader>
        <Tab></Tab>
        <PublishBar></PublishBar>
        <IndexContent></IndexContent>
    </section>
</template>

<script type="text/ecmascript-6">
import TopHeader from '@components/HeaderBar.vue';
import Tab from '@components/TabBar.vue';
import PublishBar from '@components/PublishBar.vue';
import IndexContent from './components/IndexContent';
export default {
  components: {
    Tab,
    TopHeader,
    PublishBar,
    IndexContent
  },
  data() {
    return {
      navIndex: 0
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
    @import "@styles/pages/index/index.scss";
</style>
