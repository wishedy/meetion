<template>
    <section class="ml-photo-module">
        <TitleBar txt="个人影集"></TitleBar>
        <section class="ml-photo-list">
            <figure class="ml-photo-item"></figure>
            <figure class="ml-photo-item"></figure>
            <figure class="ml-photo-item"></figure>
            <figure class="ml-photo-item"></figure>
        </section>
    </section>
</template>
<script>
import TitleBar from './UserInfoTitle';
export default {
  components: {
    TitleBar
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-photo-module{
        width: 100%;
        height: rem(318px);
        background: #fff;
        margin-bottom: rem(4px);
        &:after {
            content: '';
            display: table;
            clear: both;
        }
        .ml-photo-list{
            padding: rem(32px) rem(48px) rem(48px) rem(48px);
            height: rem(148px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .ml-photo-item{
                width:rem(142px);
                height:rem(148px);
                border-radius:rem(6px);
                background: url("https://b-ssl.duitang.com/uploads/item/201603/16/20160316144337_QAU2B.jpeg") no-repeat center center/cover;
                overflow: hidden;
            }
        }
    }

</style>
