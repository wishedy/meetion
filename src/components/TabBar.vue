<template>
    <section class="ml-components-tabBar">
        <div class="ml-components-tabBar-item home" :class="{'active':nav===0}">
            <i class="icon"></i>
            <span class="title">首页</span>
        </div>
        <div class="ml-components-tabBar-item message" :class="{'active':nav===1}">
            <i class="icon"></i>
            <span class="title">消息</span>
        </div>
        <div class="ml-components-tabBar-item personal" :class="{'active':nav===2}">
            <i class="icon"></i>
            <span class="title">我的</span>
        </div>
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
    @import "@styles/components/tabBar.scss";
</style>
