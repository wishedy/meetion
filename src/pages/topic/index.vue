<template>
    <section class="ml-mainInner">
        <TopHeader :nav="navIndex"></TopHeader>
        <Tab></Tab>
        <section class="ml-topic-list">
            <TopicItem></TopicItem>
            <TopicItem></TopicItem>
        </section>
    </section>
</template>

<script type="text/ecmascript-6">
import TopHeader from '@components/HeaderBar.vue';
import Tab from '@components/TabBar.vue';
import TopicItem from '@components/TopicItem.vue';
export default {
  components: {
    TopHeader,
    Tab,
    TopicItem
  },
  data() {
    return {
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
    @import "@styles/pages/topic/topic.scss";
</style>
