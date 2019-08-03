<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-set-center">
            <LinkItem txt="关于我们"></LinkItem>
            <LinkItem txt="修改密码"></LinkItem>
            <LinkItem txt="意见反馈"></LinkItem>
            <LinkItem txt="我要举报"></LinkItem>
        </section>
        <SureBtn txt="退出登录"></SureBtn>
    </section>
</template>

<script type="text/ecmascript-6">
import LinkItem from '@components/LinkItem.vue';
import SureBtn from '@components/SureBtn.vue';
import HeaderModule from '@components/HeaderModule.vue';
export default {
  components: {
    LinkItem,
    HeaderModule,
    SureBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '设置'
      }
    };
  },
  beforeMount() {
  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/set_center/set_center.scss";
</style>
