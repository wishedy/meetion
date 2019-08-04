<template>
    <section class="ml-personal-home">
        <div class="loginBox">
            <PersonalBanner></PersonalBanner>
            <TabBar></TabBar>
            <!--<BaseInfo></BaseInfo>-->
            <!--<AuditInfo></AuditInfo>-->
            <!--<DynamicInfo></DynamicInfo>-->
            <!--<LeaveMessage></LeaveMessage>-->
            <!--<UserState></UserState>-->
            <NoneData></NoneData>
        </div>
        <Tab :nav="navIndex"></Tab>
        <EditBar></EditBar>
        <!--<SelectEditList></SelectEditList>-->
    </section>
</template>
<script type="text/ecmascript-6">
import PersonalBanner from '@components/PersonalBanner.vue';
import TabBar from './tabBar.vue';
import BaseInfo from './BaseInfo.vue';
import SelectEditList from './SelectEditList';
import EditBar from './EditBar.vue';
import AuditInfo from './AuditInfo.vue';
import UserState from './UserState.vue';
import NoneData from './NoneData.vue';
import DynamicInfo from './DynamicInfo.vue';
import LeaveMessage from './LeaveMessage.vue';
import Tab from '@components/TabBar.vue';
export default {
  components: {
    PersonalBanner,
    Tab,
    TabBar,
    BaseInfo,
    AuditInfo,
    EditBar,
    DynamicInfo,
    LeaveMessage,
    SelectEditList,
    UserState,
    NoneData
  },
  data() {
    return {
      navIndex: 2
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
<style lang="scss" scoped>
    .ml-personal-home{
        width: 100%;
        height: auto;
    }
</style>
