<template>
    <section class="ml-user-baseInfo">
        <BaseInfoModule :userInfo="userInfo"></BaseInfoModule>
        <InterestsModule></InterestsModule>
        <PhotoModule :list="exhibitionList"></PhotoModule>
        <LoveWords title="在等你的我想说" :words="wantToSay"></LoveWords>
        <LoveWords title="我想对你说" :words="wantToSayForYou"></LoveWords>
        <MoreInfo></MoreInfo>
    </section>
</template>
<script>
import axios from 'axios';
import Common from '@scripts/lib/common.js';
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
  },
  data() {
    const cid = localStorage.getItem('customerId');
    return {
      wantToSay: '',
      wantToSayForYou: '',
      cid: cid,
      exhibitionList: [],
      userInfo: {}
    };
  },
  mounted() {
    const _this = this;
    _this.getUserInfo().getPhoto();
    // _this.$loading.showLoading();
  },
  methods: {
    getPhoto() {
      const _this = this;
      axios.get('/api/photo/query', {
        params: {
          customerId: _this.cid
        }
      })
        .then(function(response) {
          console.log(response);
          if (parseInt(response.data.code, 10) === 200) {
            _this.exhibitionList = response.data.result;
            console.log(_this.exhibitionList);
          }
          else {
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUserInfo() {
      const _this = this;
      axios.get('/api/informations/select', {
        params: {
          customerId: _this.cid
        }
      })
        .then(function(response) {
          console.log(response);
          _this.userInfo = response;
          if (parseInt(response.data.code, 10) === 200) {
            _this.wantToSay = Common.nullString(response.data.result.wantToSay);
            _this.wantToSayForYou = Common.nullString(response.data.result.wantToSayForYou);
          }
          else {
            _this.$toast('获取信息失败');
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      return _this;
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/BaseInfo.scss";
</style>
