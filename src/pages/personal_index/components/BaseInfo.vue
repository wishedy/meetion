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
            const imageArr = ['https://img01.sogoucdn.com/app/a/07/80f2e20a98944a0fa662d3fc5f472e56', 'https://img03.sogoucdn.com/app/a/07/f13b5c3830f02b6db698a2ae43ff6a67', 'https://img03.sogoucdn.com/app/a/07/e58d89131f3a0882b804313208e0e983', 'https://img01.sogoucdn.com/app/a/07/80f2e20a98944a0fa662d3fc5f472e56', 'https://img03.sogoucdn.com/app/a/07/f13b5c3830f02b6db698a2ae43ff6a67', 'https://img03.sogoucdn.com/app/a/07/e58d89131f3a0882b804313208e0e983'];
            for (let num = 0; num < response.data.result.length; num++) {
              const item = response.data.result[num];
              item.imageUrl = imageArr[num];
            }
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
