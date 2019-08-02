<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-topic-container">
            <section class="ml-topic-publish">
                <section class="publish-topic">
                    <figure class="topic-logo">
                        <div class="mask">
                            <i class="icon"></i>
                        </div>
                    </figure>
                    <article class="topic-info">
                        <h1 class="ml-topic-title">
                            <span class="sign">T：</span>
                            <span class="title">你的城市下雪了吗？</span>
                        </h1>
                        <p class="ml-topic-content">每晚十点，一夜漆黑，一路寒风，一辆自行车，一位考研人…</p>
                    </article>
                </section>
            </section>
            <section class="ml-topic-edit">
                <section class="edit-container">
                    <textarea name="" id="" cols="30" rows="10" class="content-input" placeholder="发表你的感想，别吝啬你的文采呦~"></textarea>
                </section>
            </section>
            <section class="ml-image-list">
                <PublishImage></PublishImage>
            </section>
            <section class="ml-handle">
                <SureBtn class="publish-btn" txt="发表"></SureBtn>
                <CancelBtn class="cancel-btn" txt="取消"></CancelBtn>
            </section>
        </section>
    </section>
</template>

<script type="text/ecmascript-6">
import HeaderModule from '@components/HeaderModule.vue';
import PublishImage from '@components/PublishImage.vue';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    PublishImage,
    SureBtn,
    CancelBtn
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
    @import "@styles/pages/topic_dynamic_publish/topic_dynamic_publish.scss";
</style>
