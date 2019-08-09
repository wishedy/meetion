<template>
    <section class="ml-link-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="link-list">
            <EditInputBar txt="身高(cm)" placeText="请输入您的身高(数字即可)" :txtContent="heightNum" @onTxtChange="changeHeight"></EditInputBar>
            <EditInputBar txt="体重(kg)" placeText="请输入您的体重(数字即可)" :txtContent="weight" @onTxtChange="changeWeight"></EditInputBar>
            <EditInputBar txt="薪资" placeText="请输入您的薪资" :txtContent="annualSalaryDes" @click.native="selectSalaryPicker"></EditInputBar>
            <EditInputBar txt="购房" placeText="请输入您的购房情况" :txtContent="houseDes" @onTxtChange="changeHouseDes"></EditInputBar>
            <EditInputBar txt="购车" placeText="请输入您的购车情况" :txtContent="carDes" @onTxtChange="changeCarDes"></EditInputBar>
        </section>
        <SureBtn txt="保存" class="save-btn" @click.native="saveUserInfo"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
        <awesome-picker
                class="ml-picker"
                ref="picker"
                :data="picker.data"
                :textTitle="picker.textTitle"
                :colorConfirm="picker.colorConfirm"
                @cancel="handlePickerCancel"
                @confirm="handlePickerConfirm">
        </awesome-picker>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import EditInputBar from './EditInputBar';
import PickerData from '@scripts/lib/pickerData.js';
import EditTextBar from './EditTextBar';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
import Common from '@scripts/lib/common.js';
import axios from 'axios';
import RegularTest from '@scripts/lib/regularTest.js';
export default {
  components: {
    HeaderModule,
    EditInputBar,
    EditTextBar,
    SureBtn,
    CancelBtn
  },
  data() {
    const cid = localStorage.getItem('customerId');
    return {
      headerConfig: {
        backOnOff: true,
        title: '个人状况'
      },
      infoId: '',
      cid: cid,
      heightNum: '',
      annualSalary: '',
      houseExist: '',
      houseDes: '',
      carExist: '',
      carDes: '',
      annualSalaryDes: '',
      weight: '',
      editHeightNum: '',
      editAnnualSalary: '',
      editHouseExist: '',
      editHouseDes: '',
      editCarExist: '',
      editCarDes: '',
      editAnnualSalaryDes: '',
      editWeight: '',
      picker: {
        colorConfirm: '#ff665a',
        data: [],
        textTitle: ''

      }
    };
  },
  methods: {
    handlePickerCancel(n) {
      console.log(n);
    },
    handlePickerConfirm(n) {
      console.log(n);
      const _this = this;
      _this.editAnnualSalary = n[0].index;
      _this.editAnnualSalaryDes = n[0].value;//
      _this.annualSalaryDes = n[0].value;//
    },
    changeHeight(n) {
      const _this = this;
      _this.editHeightNum = n;
    },
    changeWeight(n) {
      const _this = this;
      _this.editWeight = n;
    },
    changeCarDes(n) {
      const _this = this;
      _this.editCarDes = n;
    },
    changeHouseDes(n) {
      const _this = this;
      _this.editHouseDes = n;
    },
    selectSalaryPicker() {
      const _this = this;
      _this.picker.data = PickerData.getWage();
      _this.picker.textTitle = '请选择您的薪资';
      _this.$refs.picker.show();
    },
    saveUserInfo() {
      const _this = this;
      let checkOnOff = true;
      if (!Common.checkInvalid(_this.infoId)) {
        if (!Common.checkInvalid(_this.editHeightNum)) { // qq号非空
          if (!RegularTest.testNum(_this.editHeightNum)) {
            _this.$errorTips('请输入正确的身高,数字即可');
            checkOnOff = false;
          }
        }
        if (!Common.checkInvalid(_this.editWeight)) { // 微信号非空
          if (!RegularTest.testNum(_this.editWeight)) {
            _this.$errorTips('请输入正确的体重,数字即可');
            checkOnOff = false;
          }
        }
        if (checkOnOff) {
          axios.post('/api/informations/update', {
            id: _this.infoId,
            height: _this.editHeightNum,
            annualSalary: _this.editAnnualSalary,
            houseDes: _this.editHouseDes,
            carDes: _this.editCarDes,
            annualSalaryDes: _this.editAnnualSalaryDes,
            weight: _this.editWeight
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
            _this.heightNum = Common.nullString(response.data.result.height);
            _this.infoId = Common.nullString(response.data.result.id);
            _this.annualSalary = Common.nullString(response.data.result.annualSalary);
            _this.houseDes = Common.nullString(response.data.result.houseDes);
            _this.carDes = Common.nullString(response.data.result.carDes);
            _this.annualSalaryDes = Common.nullString(response.data.result.annualSalaryDes);
            _this.weight = Common.nullString(response.data.result.weight);
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
  mounted() {
    const _this = this;
    _this.getUserInfo();
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .link-list{
        background: #fff;
        margin-top: rem(118px);
        margin-bottom: rem(40px) ;
    }
    .save-btn{
        margin-bottom: rem(20px);
    }
</style>
