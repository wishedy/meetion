<template>
    <section class="ml-personal-home">
        <div class="loginBox">
            <PersonalBanner></PersonalBanner>
            <TabBar></TabBar>
            <BaseInfo v-if="tabIndex===0"></BaseInfo>
            <AuditInfo v-if="tabIndex===1"></AuditInfo>
            <DynamicInfo v-if="tabIndex===2"></DynamicInfo>
            <LeaveMessage v-if="tabIndex===3"></LeaveMessage>
            <!--<UserState></UserState>-->
            <!--<NoneData></NoneData>-->
        </div>
        <Tab :nav="navIndex"></Tab>
        <EditBar v-if="tabIndex===0||tabIndex===1"></EditBar>
        <SelectEditList></SelectEditList>
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
import { mapGetters } from 'vuex';

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
    ...mapGetters(['tabIndex', 'editPanelOnOff'])
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
