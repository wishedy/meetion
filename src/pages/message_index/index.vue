<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-message-content">
            <MessageBanner></MessageBanner>
            <section class="ml-message-handle">
                <section class="handle-item my-message">
                    <div class="detail-info">
                        <div class="sign">
                            <i class="icon"></i>
                        </div>
                        <em>评论我的</em>
                    </div>
                    <div class="message-num">
                        <span class="num">
                            <i></i>
                            66
                        </span>
                        <span class="arrow"></span>
                    </div>
                </section>
                <section class="handle-item praise-message">
                    <div class="detail-info">
                        <div class="sign">
                            <i class="icon"></i>
                        </div>
                        <em>赞了我的</em>
                    </div>
                    <div class="message-num">
                        <span class="num">
                            <i></i>
                            66
                        </span>
                        <span class="arrow"></span>
                    </div>
                </section>
                <section class="handle-item leave-message">
                    <div class="detail-info">
                        <div class="sign">
                            <i class="icon"></i>
                        </div>
                        <em>我的留言</em>
                    </div>
                    <div class="message-num">
                        <span class="num">
                            <i></i>
                            66
                        </span>
                        <span class="arrow"></span>
                    </div>
                </section>
            </section>
            <section class="ml-system-message">
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
                <section class="system-item">
                    <figure class="message-logo">
                        <div class="logo-type">
                            <i class="icon"></i>
                            <em class="type-des">官方</em>
                        </div>
                    </figure>
                    <article class="system-message-content">
                        <h1 class="system-title">
                            <span class="system-sign">#</span>哇~ 有人热情的欢迎了你，魅力爆棚诶~
                        </h1>
                        <span class="message-time">2月10日 15:01</span>
                        <span class="slide">展开</span>
                    </article>
                </section>
            </section>
        </section>
        <Tab :nav="navIndex"></Tab>
    </section>
</template>

<script type="text/ecmascript-6">
import Tab from '@components/TabBar.vue';
import HeaderModule from '@components/HeaderModule.vue';
import MessageBanner from '@components/MessageBanner.vue';
export default {
  components: {
    Tab,
    HeaderModule,
    MessageBanner
  },
  data() {
    return {
      navIndex: 1,
      headerConfig: {
        backOnOff: false,
        title: '消息'
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
    @import "@styles/pages/message_index/message_index.scss";
</style>
