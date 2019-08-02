<template>
    <section class="ml-mainInner">
        <section class="ml-topic-detail">
            <TopicBanner></TopicBanner>
            <TopicContent></TopicContent>
            <Dynamic></Dynamic>
            <DiscussTopic></DiscussTopic>
        </section>
    </section>
</template>

<script type="text/ecmascript-6">
import TopicBanner from '@components/topicBanner.vue';
import TopicContent from '@components/topicContent.vue';
import Dynamic from '@components/Dynamic.vue';
import DiscussTopic from '@components/DiscussTopic.vue';

export default {
  components: {
    TopicBanner,
    TopicContent,
    Dynamic,
    DiscussTopic

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
    @import "@styles/pages/topic_dynamic_detail/topic_dynamic_detail.scss";
</style>
