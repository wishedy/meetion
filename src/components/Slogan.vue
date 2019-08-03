<template>
    <section class="ml-slogan"></section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-slogan{
        width:rem(632px);
        height:rem(210px);
        background: url("../assets/components/banner/slogan.png") no-repeat center center/cover;
    }
</style>
