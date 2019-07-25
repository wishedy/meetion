<template>
    <section class="ml-mainInner">
        <TopHeader></TopHeader>
        <Tab></Tab>
        <IndexContent></IndexContent>
    </section>
</template>

<script type="text/ecmascript-6">
import TopHeader from '@components/HeaderBar.vue';
import Tab from '@components/TabBar.vue';
import IndexContent from './components/IndexContent';
export default {
  components: {
    Tab,
    TopHeader,
    IndexContent
  },
  data() {
    return {

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
