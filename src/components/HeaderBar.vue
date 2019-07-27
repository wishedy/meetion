<template>
    <section class="ml-components-headerBar">
        <ul class="ml-components-tabList">
            <li class="tabItem" :class="{'active':nav===0}">全部</li>
            <li class="tabItem" :class="{'active':nav===1}">遇见</li>
            <li class="tabItem" :class="{'active':nav===2}">话题</li>
        </ul>
    </section>
</template>
<script>
export default {
  props: {
    nav: {
      default() {
        return 0;
      },
      type: Number
    }
  }
};
</script>
<style scoped lang="scss">
    @import "@styles/components/headerBar.scss";
</style>
