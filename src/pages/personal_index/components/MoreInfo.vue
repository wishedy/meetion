<template>
    <section class="ml-moreInfo">
        <TitleBar txt="更多资料"></TitleBar>
        <section class="ml-moreInfo-list">
            <MoreInfoItem txt="家庭情况"></MoreInfoItem>
            <MoreInfoItem txt="个人情况"></MoreInfoItem>
            <MoreInfoItem txt="联系方式"></MoreInfoItem>
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
