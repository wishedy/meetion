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
import axios from 'axios';
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
  mounted() {
    const _this = this;
    _this.getTopicList();
  },
  methods: {
    getTopicList() {
      const _this = this;
      axios.get('/api/topic/select', {
        params: {
        }
      })
        .then(function(response) {
          console.log(response);
          if (parseInt(response.data.code, 10) === 200) {
          }
          else {
            _this.$toast('获取信息失败');
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/topic/topic.scss";
</style>
