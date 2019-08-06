<template>
    <section class="ml-components-headerBar">
        <ul class="ml-components-tabList">
            <li class="tabItem" :class="{'active':nav===0}" @click.stop="jumpPage(0)">全部</li>
            <li class="tabItem" :class="{'active':nav===1}" @click.stop="jumpPage(1)">遇见</li>
            <li class="tabItem" :class="{'active':nav===2}" @click.stop="jumpPage(2)">话题</li>
        </ul>
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
  methods: {
    jumpPage(index) {
      let pageUrl = '';
      console.log(index);
      switch (parseInt(index, 10)) {
        case 0:
          pageUrl = '/all_index/all_index.html';
          break;
        case 1:
          pageUrl = '/';
          break;
        case 2:
          pageUrl = '/topic/topic.html';
          break;
      }
      Common.jumpUrl(pageUrl);
    }
  }
};
</script>
<style scoped lang="scss">
    @import "@styles/components/headerBar.scss";
</style>
