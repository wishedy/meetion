<template>
    <section class="ml-personal-home">
        <div class="loginBox">
            <PersonalHeader v-if="!scrollOnOff" :style="{'opacity':scrollOnOff?'0':'1'}"></PersonalHeader>
            <PersonalBanner :style="{'opacity':scrollOnOff?'1':'0'}"></PersonalBanner>
            <TabBar></TabBar>
            <BaseInfo v-if="tabIndex===0" class="ml-info-page"></BaseInfo>
            <AuditInfo v-if="tabIndex===1" class="ml-info-page"></AuditInfo>
            <DynamicInfo v-if="tabIndex===2" class="ml-info-page"></DynamicInfo>
            <LeaveMessage v-if="tabIndex===3" class="ml-info-page"></LeaveMessage>
            <!--<UserState></UserState>-->
            <!--<NoneData></NoneData>-->
        </div>
        <Tab :nav="navIndex"></Tab>
        <EditBar v-if="tabIndex===0||tabIndex===1"></EditBar>
        <SelectEditList></SelectEditList>

    </section>
</template>
<script type="text/ecmascript-6">
import $ from 'jquery';
import PersonalBanner from '@components/PersonalBanner.vue';
import TabBar from './tabBar.vue';
import BaseInfo from './BaseInfo.vue';
import PersonalHeader from './PersonalHeader.vue';
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
    NoneData,
    PersonalHeader
  },
  data() {
    return {
      navIndex: 2,
      personalTop: 0,
      scrollOnOff: true
    };
  },
  beforeMount() {
  },
  computed: {
    ...mapGetters(['tabIndex', 'editPanelOnOff'])
  },
  methods: {
    handleScroll() {
      const _this = this;
      $('.ml-mainInner').scroll((e) => {
        const nowTop = $('.ml-mainInner').scrollTop();
        if (nowTop > _this.personalTop) {
          _this.scrollOnOff = false;
        }
        else {
          _this.scrollOnOff = true;
        }
      });
    }
  },
  mounted() {
    const _this = this;
    _this.handleScroll();
    setTimeout(() => {
      _this.personalTop = $('.ml-info-page').offset().top;
    }, 1000);
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
