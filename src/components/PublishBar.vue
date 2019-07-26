<template>
    <section class="ml-publish"></section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-publish{
        position: fixed;
        right: rem(48px);
        bottom:rem(146px);
        width: rem(96px);
        height: rem(96px);
        z-index: 2;
        background: url("../assets/components/dynamic/publish.png") no-repeat center center/cover;
    }
</style>
