<template>
    <section class="ml-baseInfo-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-baseInfo-list">
            <InfoBar labelTxt="姓名" :infoContent="trueName" inputOnOff="1" @onTxtChange="changeName"></InfoBar>
            <InfoBar labelTxt="性别" :infoContent="eidtGender" @click.native="selectGender"></InfoBar>
            <InfoBar labelTxt="生日" :infoContent="editBirthday" @click.native="selectBirthDay"></InfoBar>
            <InfoBar labelTxt="家乡" :infoContent="editHomeProvince" @click.native="selectHome"></InfoBar>
            <InfoBar labelTxt="所在地" :infoContent="editProvince" @click.native="selectLocal"></InfoBar>
        </section>
        <SureBtn txt="保存" class="save-btn" @click.native="saveUserInfo"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
        <awesome-picker
                class="ml-picker"
                ref="homePicker"
                :data="homePicker.data"
                :anchor="homePicker.anchor"
                :textTitle="homePicker.textTitle"
                :colorConfirm="homePicker.colorConfirm"
                @cancel="handlePickerCancel"
                @confirm="handlePickerConfirm">
        </awesome-picker>
        <awesome-picker
                class="ml-picker"
                ref="localPicker"
                :data="localPicker.data"
                :anchor="localPicker.anchor"
                :textTitle="localPicker.textTitle"
                :colorConfirm="localPicker.colorConfirm"
                @cancel="handlePickerCancel"
                @confirm="handlePickerConfirm">
        </awesome-picker>
        <awesome-picker
                class="ml-picker"
                ref="genderPicker"
                :data="genderPicker.data"
                :anchor="genderPicker.anchor"
                :textTitle="genderPicker.textTitle"
                :colorConfirm="genderPicker.colorConfirm"
                @cancel="handlePickerCancel"
                @confirm="handlePickerConfirm">
        </awesome-picker>
        <awesome-picker
                class="ml-picker"
                ref="birthdayPicker"
                :data="birthdayPicker.data"
                :type="birthdayPicker.type"
                :anchor="birthdayPicker.anchor"
                :textTitle="birthdayPicker.textTitle"
                :colorConfirm="birthdayPicker.colorConfirm"
                @cancel="handlePickerCancel"
                @confirm="handlePickerConfirm">
        </awesome-picker>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
import RegularTest from '@scripts/lib/regularTest.js';
import HeaderModule from '@components/HeaderModule.vue';
import PickerData from '@scripts/lib/pickerData.js';
import InfoBar from './InfoBar';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
import axios from 'axios';
export default {
  components: {
    HeaderModule,
    InfoBar,
    SureBtn,
    CancelBtn
  },
  computed: {
    editHomeProvince() {
      const _this = this;
      return Common.checkInvalid(_this.resetProviunce(_this.homeProvince)) ? '<i class="placeDes" style="color:rgba(187,187,187,1);">请选择您的家乡所在地</i>' : _this.resetProviunce(_this.homeProvince);
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
    handlePickerCancel(n) {
      console.log(n);
    },
    handlePickerConfirm(n) {
      console.log(n);
      const _this = this;
      if (parseInt(_this.cityType, 10) === 0) {
        // 家乡所在地
        _this.homeProvince = _this.formatProvince(n);
      }
      else if (parseInt(_this.cityType, 10) === 1) {
        // 现在所在地
        _this.province = _this.formatProvince(n);
      }
      else if (parseInt(_this.cityType, 10) === 2) {
        console.log(n);
        _this.birthday = _this.formatBirthday(n);
      }
      else if (parseInt(_this.cityType, 10) === 3) {
        _this.gender = n[0].index;
      }
    },
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
    anchorProviunce(str) {
      const arr = str.split(',');
      return [
        {
          index: arr[0].split('_')[1],
          value: arr[0].split('_')[0]
        },
        {
          index: arr[1].split('_')[1],
          value: arr[1].split('_')[0]
        }
      ];
    },
    anchorGender() {
      const _this = this; console.log(parseInt(_this.gender, 10));
      if (isNaN(parseInt(_this.gender, 10))) {
        return [];
      }
      else {
        if (parseInt(_this.gender, 10) === 0) {
          return [
            {
              index: 0,
              value: '女'
            }
          ];
        }
        else if (parseInt(_this.gender, 10) === 1) {
          return [
            {
              index: 0,
              value: '男'
            }
          ];
        }
      }
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
    changeName(n) {
      const _this = this;
      _this.trueName = n;
      console.log(_this.trueName);
    },
    selectBirthDay() {
      const _this = this;
      _this.cityType = 2;
      _this.$refs.birthdayPicker.show();
    },
    selectGender() {
      const _this = this;
      _this.cityType = 3;
      _this.$refs.genderPicker.show();
    },
    selectHome() {
      const _this = this;
      _this.cityType = 0;
      _this.$refs.homePicker.show();
    },
    selectLocal() {
      const _this = this;
      _this.cityType = 1;
      _this.$refs.localPicker.show();
    },
    saveUserInfo() {
      const _this = this;
      let checkOnOff = true;
      if (!Common.checkInvalid(_this.infoId)) {
        if (!Common.checkInvalid(_this.trueName)) { // 名字非空
          if (!RegularTest.testName(_this.trueName)) {
            _this.$errorTips('请输入正确的名字');
            checkOnOff = false;
          }
        }
        if (checkOnOff) {
          axios.post('/api/informations/update', {
            id: _this.infoId,
            trueTame: _this.trueName,
            homeProvince: _this.homeProvince,
            province: _this.province,
            gender: _this.gender + '',
            birthday: _this.birthday
          })
            .then(function(response) {
              console.log(response);
              if (parseInt(response.data.code, 10) === 200) {
                _this.$toast('信息保存成功');
              }
              else {
                _this.$toast('信息保存失败');
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
      else {
        _this.$errorTips('保存参数有误');
      }
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
            _this.homePicker.anchor = Common.checkInvalid(response.data.result.homeProvince) ? [] : _this.anchorProviunce(response.data.result.homeProvince);
            _this.localPicker.anchor = Common.checkInvalid(response.data.result.province) ? [] : _this.anchorProviunce(response.data.result.province);
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
    const areaData = PickerData.getCitydata();
    const genderdata = PickerData.getGenderdata();
    const cid = localStorage.getItem('customerId');
    return {
      picker: {},
      cid: cid,
      infoId: '',
      homePicker: {
        colorConfirm: '#ff665a',
        data: areaData,
        anchor: [],
        textTitle: '请选择家乡所在地'
      },
      localPicker: {
        colorConfirm: '#ff665a',
        data: areaData,
        anchor: [],
        textTitle: '请选择现在的所在地'
      },
      genderPicker: {
        colorConfirm: '#ff665a',
        data: genderdata,
        anchor: [],
        textTitle: '请选择性别'
      },
      birthdayPicker: {
        colorConfirm: '#ff665a',
        anchor: [],
        textTitle: '请选择生日',
        type: 'date'
      },
      headerConfig: {
        backOnOff: true,
        title: '基本资料'
      },
      cityType: 0,
      trueName: '',
      homeProvince: '',
      province: '',
      birthday: '',
      gender: ''
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-baseInfo-page{
        margin-top: rem(118px);
        .ml-baseInfo-list{
            background: #fff;
            margin-bottom: rem(40px);
        }
        .save-btn{
            margin-bottom: rem(20px);
        }
    }
</style>
