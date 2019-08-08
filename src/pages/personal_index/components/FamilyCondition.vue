<template>
    <section class="ml-family-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="family-list">
            <EditTextBar txt="家庭成员" placeText="请输入您的家庭情况（例如：父母健在、有一个哥哥）" @onTxtChange="changeMember"></EditTextBar>
            <EditTextBar txt="父母职业" placeText="请输入您父母的情况（例如：务农、在职）" @onTxtChange="changeParentsWork"></EditTextBar>
            <EditTextBar txt="主要经济来源" placeText="请输入您的主要经济来源（例如：父母做生意、本人在岗工作）" @onTxtChange="changeFamilyIncome"></EditTextBar>
        </section>
        <SureBtn txt="保存" class="save-btn" @click.native="saveInfo"></SureBtn>
        <CancelBtn txt="取消"></CancelBtn>

    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import EditTextBar from './EditTextBar';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
export default {
  components: {
    HeaderModule,
    EditTextBar,
    SureBtn,
    CancelBtn
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '家庭情况'
      },
        circumstance:"",
        parentsWork:"",
        familyIncome:"",
        editCircumstance:"",
        editParentsWork:"",
        editFamilyIncome:""
    };
  },
    methods:{
        changeMember(txt){
            let _this = this;
            _this.editCircumstance = txt;

        },
        changeParentsWork(txt){
            let _this = this;
            _this.editParentsWork = txt;

        },
        changeFamilyIncome(txt){
            let _this = this;
            _this.editFamilyIncome = txt;

        },
        saveInfo(){
            let _this = this;
            axios.post('/api/family/update', {
                id: _this.cid,
                circumstance: _this.editCircumstance,
                parentsWork:_this.editParentsWork,
                familyIncome:_this.editFamilyIncome
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .family-list{
        background: #fff;
        margin-top: rem(118px);
        margin-bottom: rem(40px) ;
    }
    .save-btn{
        margin-bottom: rem(20px);
    }
</style>
