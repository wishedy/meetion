<template>
    <section class="ml-topic-item">
        <section class="ml-topic-upSide">
            <figure class="topic-logo">
                <div class="mask">
                    <div class="topic-sign"></div>
                </div>
            </figure>
            <article class="topic-detail">
                <div class="topic-title">
                    <span class="sign">T：</span>
                    <span>你的城市下雪了吗？</span>
                </div>
                <div class="topic-content">
                    每晚十点，一夜漆黑，一路寒风，一辆自行车，一位考研人。最难忘的莫过于每天守着自习室的小书桌，很小，但感觉很温馨，每天奋斗的地方只有半平米，吃饭睡觉都很匆匆，但是只有努力过…
                </div>
                <section class="topic-handle">
                    <span class="handle-item collect">
                        <i class="icon"></i>
                        <em>99+</em>
                    </span>
                    <span class="handle-item praise">
                        <i class="icon"></i>
                        <em>99+</em>
                    </span>
                    <span class="handle-item message">
                        <i class="icon"></i>
                        <em>99+</em>
                    </span>
                    <span class="handle-item review">
                        <i class="icon"></i>
                        <em>99+</em>
                    </span>
                </section>
            </article>
        </section>
        <CommentList></CommentList>
    </section>
</template>
<script>
import CommentList from '@components/CommentList.vue';
export default {
  components: {
    CommentList
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/topicItem.scss";
</style>
