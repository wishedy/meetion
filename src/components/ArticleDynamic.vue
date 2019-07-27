<template>
    <section class="ml-article-dynamic">
        <figure class="ml-article-logo">
            <span class="article-sign">文章</span>
        </figure>
        <h1 class="ml-article-title">
            <span class="title">给女孩的悄悄话</span>
        </h1>
        <p class="ml-article-content">
            你告诉我：你将步入婚姻的殿堂。你的眼睛，盛满了幸福。 我悄悄对你说：我已把我的祝福，托付给日月星辉，让她们时刻照射你的生活。你要华丽转身，腾出时空，接纳生活所有的美好…
        </p>
        <section class="ml-article-commentContainer">
            <CommentList></CommentList>
        </section>
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
    @import "@styles/components/articleDynamic.scss";
</style>
