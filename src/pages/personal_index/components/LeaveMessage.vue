<template>
    <section class="ml-leave-message">
        <section class="leave-message-item">
            <section class="message-author">
                <figure class="user-logo"></figure>
                <article class="user-detail">
                    <div class="user-name">随遇而安</div>
                    <div class="message-time">
                        <i class="icon"></i>
                        <em class="date">2月10日</em>
                        <em>15:01</em>
                    </div>
                </article>
                <span class="feedBack">#回复ta</span>
            </section>
            <section class="message-content">
                总有些事，管你愿不愿意，它都要发生，你只能接受，总有些东西，管你躲不躲避，它都要来临，你只能面对。
            </section>
            <section class="message-comment-list">
                <MessageCommentList></MessageCommentList>
            </section>
            <section class="message-feedBack">
                回复 风衣草：
            </section>
        </section>
        <section class="leave-message-item">
            <section class="message-author">
                <figure class="user-logo"></figure>
                <article class="user-detail">
                    <div class="user-name">随遇而安</div>
                    <div class="message-time">
                        <i class="icon"></i>
                        <em class="date">2月10日</em>
                        <em>15:01</em>
                    </div>
                </article>
                <span class="feedBack">#回复ta</span>
            </section>
            <section class="message-content">
                总有些事，管你愿不愿意，它都要发生，你只能接受，总有些东西，管你躲不躲避，它都要来临，你只能面对。
            </section>
            <section class="message-comment-list">
                <MessageCommentList></MessageCommentList>
            </section>
            <section class="message-feedBack">
                回复 风衣草：
            </section>
        </section>
        <section class="leave-message-item">
            <section class="message-author">
                <figure class="user-logo"></figure>
                <article class="user-detail">
                    <div class="user-name">随遇而安</div>
                    <div class="message-time">
                        <i class="icon"></i>
                        <em class="date">2月10日</em>
                        <em>15:01</em>
                    </div>
                </article>
                <span class="feedBack">#回复ta</span>
            </section>
            <section class="message-content">
                总有些事，管你愿不愿意，它都要发生，你只能接受，总有些东西，管你躲不躲避，它都要来临，你只能面对。
            </section>
            <section class="message-comment-list">
                <MessageCommentList></MessageCommentList>
            </section>
            <section class="message-feedBack">
                回复 风衣草：
            </section>
        </section>
        <section class="ml-comment-more">
            没有更多啦~
        </section>
    </section>
</template>
<script>
import MessageCommentList from '@components/MessageCommentList.vue';
export default {
  components: {
    MessageCommentList
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/leaveMessage.scss";
</style>
