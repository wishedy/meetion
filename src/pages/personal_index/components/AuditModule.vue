<template>
    <section class="ml-audit-module">
        <AuditTitle :autitTitle="autitTitle"></AuditTitle>
        <AuditInputBar></AuditInputBar>
        <AuditPhoto :photoNum="photoNum" :jobOnOff="jobOnOff"></AuditPhoto>
    </section>
</template>
<script>
import AuditTitle from './AuditTitle';
import AuditInputBar from './AuditInputBar';
import AuditPhoto from './AuditPhoto';
export default {
  components: {
    AuditTitle,
    AuditInputBar,
    AuditPhoto
  },
  props: {
    autitTitle: {
      default() {
        return '';
      },
      type: String
    },
    photoNum: {
      default() {
        return 0;
      },
      type: String || Number
    },
    jobOnOff: {
      default() {
        return false;
      },
      type: Boolean
    }
  }
};
</script>
