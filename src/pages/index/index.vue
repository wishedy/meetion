<template>
    <section class="ml-mainInner">
        <TopHeader :nav="navIndex"></TopHeader>
        <Tab></Tab>
        <PublishBar linkUrl="/publish_dynamic/publish_normal_dynamic.html"></PublishBar>
        <IndexContent></IndexContent>
    </section>
</template>

<script type="text/ecmascript-6">
import TopHeader from '@components/HeaderBar.vue';
import Tab from '@components/TabBar.vue';
import PublishBar from '@components/PublishBar.vue';
import IndexContent from './components/IndexContent';
import axios from 'axios';
export default {
  components: {
    Tab,
    TopHeader,
    PublishBar,
    IndexContent
  },
  data() {
    return {
      navIndex: 1
    };
  },
  beforeMount() {
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/index/index.scss";
</style>
