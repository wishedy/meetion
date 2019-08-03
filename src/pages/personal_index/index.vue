<template>
    <section class="ml-mainInner">
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
import TabBar from './components/tabBar.vue';
import BaseInfo from './components/BaseInfo.vue';
import SelectEditList from './components/SelectEditList';
import EditBar from './components/EditBar.vue';
import AuditInfo from './components/AuditInfo.vue';
import UserState from './components/UserState.vue';
import NoneData from './components/NoneData.vue';
import DynamicInfo from './components/DynamicInfo.vue';
import LeaveMessage from './components/LeaveMessage.vue';
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
      headerConfig: {
        backOnOff: false,
        title: '个人中心首页'
      },
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
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/personal_index/personal_index.scss";
</style>
