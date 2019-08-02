<template>
    <section class="ml-indexContent">
        <BannerContent></BannerContent>
        <WelcomeCard></WelcomeCard>
        <section class="ml-index-list">
            <Dynamic></Dynamic>
        </section>
    </section>
</template>
<script>
import BannerContent from '@components/BannerContent.vue';
import Dynamic from '@components/Dynamic.vue';
import WelcomeCard from '@components/WelcomeCard.vue';
export default {
  components: {
    BannerContent,
    Dynamic,
    WelcomeCard
  }
};
</script>
