<template>
    <section class="ml-interests-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="interests-list"></section>
    </section>
</template>
<script>
    import HeaderModule from '@components/HeaderModule.vue';
    export default {
        components: {
            HeaderModule
        },
        data() {
            return {
                headerConfig: {
                    backOnOff: true,
                    title: '兴趣爱好'
                }
            };
        }
    }
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
</style>