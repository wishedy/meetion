<template>
    <section class="ml-user-baseInfo">
        <BaseInfoModule></BaseInfoModule>
        <InterestsModule></InterestsModule>
        <PhotoModule></PhotoModule>
        <LoveWords title="在等你的我想说" words="爱情是两个人的事，而婚姻则关乎到两个家庭。婚姻，就是一场招聘。只不过，这里招聘的，是你后半生的亲人。"></LoveWords>
        <LoveWords title="我想对你说" words="爱情是两个人的事，而婚姻则关乎到两个家庭。婚姻，就是一场招聘。只不过，这里招聘的，是你后半生的亲人。"></LoveWords>
        <MoreInfo></MoreInfo>
    </section>
</template>
<script>
import BaseInfoModule from './BaseInfoModule';
import InterestsModule from './InterestsModule';
import PhotoModule from './PhotoModule';
import LoveWords from './LoveWords';
import MoreInfo from './MoreInfo';
export default {
  components: {
    BaseInfoModule,
    InterestsModule,
    PhotoModule,
    LoveWords,
    MoreInfo
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/BaseInfo.scss";
</style>
