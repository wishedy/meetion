<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-topicDynamic-detail">
            <section class="ml-topicBanner-container">
                <section class="banner">
                    <section class="topic-logo">
                        <div class="mask">
                            <i class="icon"></i>
                        </div>
                    </section>
                    <section class="ml-topic-info">
                        <h1 class="title">
                            <span class="sign">T：</span>
                            <em>你的城市下雪了吗？</em>
                        </h1>
                        <section class="ml-topic-handle">
                            <div class="ml-take-partIn">加入讨论</div>
                            <div class="ml-take-all">查看所有</div>
                        </section>
                    </section>
                </section>
            </section>
            <Dynamic></Dynamic>
        </section>
        <PublishBar></PublishBar>
    </section>
</template>

<script type="text/ecmascript-6">
import HeaderModule from '@components/HeaderModule.vue';
import Tab from '@components/TabBar.vue';
import PublishBar from '@components/PublishBar.vue';
import Dynamic from '@components/Dynamic.vue';
export default {
  components: {
    HeaderModule,
    Tab,
    PublishBar,
    Dynamic
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '话题'
      }
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
