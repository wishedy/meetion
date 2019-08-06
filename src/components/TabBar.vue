<template>
    <section class="ml-components-tabBar">
        <div class="ml-components-tabBar-item home" :class="{'active':nav===0}" @click.stop="jumpPage(0)">
            <i class="icon"></i>
            <span class="title">首页</span>
        </div>
        <div class="ml-components-tabBar-item message" :class="{'active':nav===1}" @click.stop="jumpPage(1)">
            <i class="icon"></i>
            <span class="title">消息</span>
        </div>
        <div class="ml-components-tabBar-item personal" :class="{'active':nav===2}" @click.stop="jumpPage(2)">
            <i class="icon"></i>
            <span class="title">我的</span>
        </div>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
export default {
  props: {
    nav: {
      default() {
        return 0;
      },
      type: Number
    }
  },
  mounted() {
  },
  methods: {
    jumpPage(index) {
      let pageUrl = '';
      console.log(index);
      switch (parseInt(index, 10)) {
        case 0:
          pageUrl = '/';
          break;
        case 1:
          pageUrl = '/message/message_index.html';
          break;
        case 2:
          pageUrl = '/personal/personal_index.html';
          break;
      }
      Common.jumpUrl(pageUrl);
    }
  }
};
</script>
<style scoped lang="scss">
    @import "@styles/components/tabBar.scss";
</style>
