<template>
    <section class="ml-indexContent">
        <BannerContent></BannerContent>
        <section class="ml-index-list">
            <Dynamic></Dynamic>
        </section>
    </section>
</template>
<script>
import BannerContent from '@components/BannerContent.vue';
import Dynamic from '@components/Dynamic.vue';
export default {
  components: {
    BannerContent,
    Dynamic
  }
};
</script>
