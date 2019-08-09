<template>
    <section class="ml-baseInfo-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-baseInfo-list">
            <InfoBar labelTxt="姓名" infoContent="王梓睿"></InfoBar>
            <InfoBar labelTxt="性别" infoContent="男"></InfoBar>
            <InfoBar labelTxt="生日" infoContent="1991.07.31 - 27 - 巨蟹座"></InfoBar>
            <InfoBar labelTxt="家乡" infoContent="河南省 - 漯河市" @click.native="selectCity"></InfoBar>
            <InfoBar labelTxt="所在地" infoContent="北京"></InfoBar>
        </section>
        <SureBtn txt="保存" class="save-btn"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>
        <awesome-picker
                class="ml-picker"
                ref="picker"
                :data="picker.data"
                :anchor="picker.anchor"
                :textTitle="picker.textTitle"
                :colorConfirm="picker.colorConfirm"
                @cancel="handlePickerCancel"
                @confirm="handlePickerConfirm">
        </awesome-picker>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import PickerData from '@scripts/lib/pickerData.js';
import InfoBar from './InfoBar';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    InfoBar,
    SureBtn,
    CancelBtn
  },
  methods: {
    handlePickerCancel(n) {
      console.log(n);
    },
    handlePickerConfirm(n) {
      console.log(n);
    },
    selectCity() {
      const _this = this;
      _this.picker.data = PickerData.getCitydata();
      _this.picker.textTitle = '请选择家乡所在地';
      _this.$refs.picker.show();
    }
  },
  data() {
    return {
      picker: {
        colorConfirm: '#ff665a',
        data: [],
        anchor: [],
        textTitle: ''
      },
      headerConfig: {
        backOnOff: true,
        title: '基本资料'
      }
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
