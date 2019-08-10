<template>
    <section class="ml-moreInfo">
        <TitleBar txt="更多资料"></TitleBar>
        <section class="ml-moreInfo-list">
            <MoreInfoItem txt="家庭情况" @click.native="jumpPage(0)"></MoreInfoItem>
            <MoreInfoItem txt="个人情况" @click.native="jumpPage(1)"></MoreInfoItem>
            <MoreInfoItem txt="联系方式" @click.native="jumpPage(2)"></MoreInfoItem>
        </section>
    </section>
</template>
<script>
import TitleBar from './UserInfoTitle';
import MoreInfoItem from './MoreInfoItem';
export default {
  components: {
    TitleBar,
    MoreInfoItem
  },
  methods: {
    jumpPage(type) {
      const _this = this;
      switch (parseInt(type, 10)) {
        case 0:
          _this.$router.push({ name: 'family' });
          break;
        case 1:
          _this.$router.push({ name: 'condition' });
          break;
        case 2:
          _this.$router.push({ name: 'link' });
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-moreInfo{
        background: #fff;
        margin-bottom: rem(118px);
    }
</style>
