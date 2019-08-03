<template>
    <section class="ml-audit-container">
        <AuditModule autitTitle="身份证" photoNum="2"></AuditModule>
        <AuditModule autitTitle="学位证" photoNum="1"></AuditModule>
        <AuditModule autitTitle="学历证" photoNum="1"></AuditModule>
        <AuditModule autitTitle="职位相关证明" photoNum="1" :jobOnOff="jobOnOff"></AuditModule>
        <p class="ml-audit-warn">注：以上资料仅供审核！</p>
    </section>
</template>
<script>
import AuditModule from './AuditModule';
export default {
  components: {
    AuditModule
  },
  data() {
    return {
      jobOnOff: true
    };
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/AuditInfo.scss";
</style>
