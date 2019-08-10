<template>
    <section class="ml-baseInfo-module">
        <TitleBar txt="基本资料"></TitleBar>
        <InfoBar labelTxt="姓名" :infoContent="editTrueName"></InfoBar>
        <InfoBar labelTxt="性别" :infoContent="eidtGender"></InfoBar>
        <InfoBar labelTxt="生日" :infoContent="editBirthday"></InfoBar>
        <InfoBar labelTxt="家乡" :infoContent="editHomeProvince"></InfoBar>
        <InfoBar labelTxt="所在地" :infoContent="editProvince"></InfoBar>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
import TitleBar from './UserInfoTitle';
import InfoBar from './InfoBar';
import axios from 'axios';
export default {
  components: {
    TitleBar,
    InfoBar
  },
  computed: {
    editHomeProvince() {
      const _this = this;
      return Common.checkInvalid(_this.resetProviunce(_this.homeProvince)) ? '<i class="placeDes" style="color:rgba(187,187,187,1);">请选择您的家乡所在地</i>' : _this.resetProviunce(_this.homeProvince);
    },
    editTrueName() {
      const _this = this;
      return Common.checkInvalid(_this.trueName) ? '<i class="placeDes" style="color:rgba(187,187,187,1);">请输入您的姓名</i>' : _this.trueName;
    },
    editBirthday() {
      const _this = this;
      return Common.checkInvalid(_this.birthday) ? '<i class="placeDes" style="color:rgba(187,187,187,1);">请选择你的出生日期</i>' : _this.birthday;
    },
    editProvince() {
      const _this = this;
      return Common.checkInvalid(_this.resetProviunce(_this.province)) ? '<i class="placeDes" style="color:rgba(187,187,187,1);">请选择您现在的所在地</i>' : _this.resetProviunce(_this.province);
    },
    eidtGender() {
      const _this = this;
      if (isNaN(parseInt(_this.gender, 10))) {
        return '<i class="placeDes" style="color:rgba(187,187,187,1);">请您选择</i>';
      }
      else {
        if (parseInt(_this.gender, 10) === 0) {
          return '女';
        }
        else if (parseInt(_this.gender, 10) === 1) {
          return '男';
        }
      }
    }
  },
  mounted() {
    const _this = this;
    _this.getUserInfo();
  },
  methods: {
    resetProviunce(str) {
      let resultStr = '';
      const arr = str.split(',');
      if (arr.length > 1) {
        resultStr = arr[0].split('_')[0] + '-' + arr[1].split('_')[0];
      }
      return resultStr;
    },
    formatBirthday(arr) {
      return arr[0].value + arr[1].value + arr[2].value;
    },
    formatProvince(data) {
      let resultStr = '';
      for (let num = 0; num < data.length; num++) {
        const item = data[num];
        if (num === 0) {
          resultStr += item.value + '_' + item.index + ',';
        }
        else {
          resultStr += item.value + '_' + item.index;
        }
      }
      return resultStr;
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
          if (parseInt(response.data.code, 10) === 200) {
            _this.trueName = Common.nullString(response.data.result.trueTame);
            _this.infoId = Common.nullString(response.data.result.id);
            _this.homeProvince = Common.nullString(response.data.result.homeProvince);
            _this.province = Common.nullString(response.data.result.province);
            _this.birthday = Common.nullString(response.data.result.birthday);
            _this.gender = Common.nullString(response.data.result.gender);
          }
          else {
            _this.$toast('获取信息失败');
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  data() {
    const cid = localStorage.getItem('customerId');
    return {
      picker: {},
      cid: cid,
      infoId: '',
      trueName: '',
      homeProvince: '',
      province: '',
      birthday: '',
      gender: ''
    };
  }
};
</script>
