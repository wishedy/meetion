<template>
    <section class="ml-interests-page">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="interests-list">
            <span class="interest-item" :style="createColor()" v-if="interestType===1">
                美食
            </span>
            <span class="interest-item" v-text="item.describes" :key="item.id" v-for="(item) in SysHobbyList" v-if="interestType===0" :class="{'selected':item.sign}" @click.stop="selectLable(item,0)">
            </span>
            <span class="interest-item" v-text="item.describes" :key="item.id" v-for="(item) in UserHobbyList" v-if="interestType===0" :class="{'selected':item.sign}" @click.stop="selectLable(item,1)">
            </span>
            <span class="interest-item add-item" @click.stop="addInterste">
                +添加
            </span>
        </section>
        <section class="handle-bar">
            <div class="cancel-btn">取消</div>
            <div class="save-btn" @click.stop="saveInfo">保存</div>
        </section>
        <AddInterest  style="display: none;" @onTxtChange="changeTxt" @submitInterest="submit"></AddInterest>
    </section>
</template>
<script>
import Common from '@scripts/lib/common.js';
import HeaderModule from '@components/HeaderModule.vue';
import AddInterest from './AddInterest';
import $ from 'jquery';
import axios from 'axios';
export default {
  components: {
    HeaderModule,
    AddInterest
  },
  props: {
    interestType: {
      default() {
        return 0;
      },
      type: Number
    }
  },
  methods: {
    createColor() {
      const colorArr = ['247,181,1', '149,200,99', '255,81,83', '212,107,8', '64,169,255'];
      const selectColor = colorArr[Math.floor((Math.random() * colorArr.length))];
      const resultColor = { background: `rgba(${selectColor},.5)`, border: `.026667rem solid rgba(${selectColor},1)` };
      return resultColor;
    },
    changeTxt(n) {
      const _this = this;
      _this.addTxt = n;
    },
    selectLable(item, type) {
      const _this = this;
      const checkSign = (id, list) => {
        let innerIndex = -1;
        for (let num = 0; num < list.length; num++) {
          const dataItem = list[num];
          console.log(id === dataItem.id);
          if (id === dataItem.id) {
            innerIndex = num;
          }
        }
        return innerIndex;
      };
      let index = -1;
      let checkList = [];
      if (parseInt(type, 10) === 0) {
        checkList = JSON.parse(JSON.stringify(_this.SysHobbyList));
      }
      else {
        checkList = JSON.parse(JSON.stringify(_this.UserHobbyList));
      }
      index = checkSign(item.id, checkList);
      console.log(checkList[index].sign, index);
      checkList[index].sign = !(checkList[index].sign);
      console.log(checkList[index].sign, index);
      if (index > -1) {
        if (parseInt(type, 10) === 0) {
          _this.SysHobbyList = checkList;
        }
        else {
          _this.UserHobbyList = checkList;
        }
      }
    },
    getInterstesList() {
      const _this = this;
      axios.get('/api/userHobby/select', {
        params: {
          customerId: _this.cid
        }
      })
        .then(function(response) {
          console.log(response);
          if (parseInt(response.data.code, 10) === 200) {
            _this.SysHobbyList = response.data.result.SysHobbyList;
            _this.UserHobbyList = response.data.result.UserHobbyList;
          }
          else {
            _this.$toast('获取信息失败');
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submit() {
      const _this = this;
      console.log(_this.addTxt);
      if (!Common.checkInvalid(_this.addTxt)) {
        axios.post('/api/hobby/insert', {
          describes: _this.addTxt,
          isSysHobby: 2,
          customerId: _this.cid
        })
          .then(function(response) {
            console.log(response);
            if (parseInt(response.data.code, 10) === 200) {
              _this.addTxt = '';
              _this.getInterstesList();
              const element = $('.ml-addInterest');
              element.hide();
            }
            else {
              _this.$toast('信息保存失败');
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      else {
        _this.$toast('参数有误');
      }
    },
    addInterste() {
      const element = $('.ml-addInterest');
      element.fadeIn(300);
      element.find('input').focus();
    },
    saveInfo() {
      const _this = this;
      const saveList = (list) => {
        const resultArr = [];
        for (let num = 0; num < list.length; num++) {
          const dataItem = list[num];
          if (dataItem.sign) {
            resultArr.push(dataItem.id);
          }
        }
        return resultArr;
      };
      const resultlist = [...saveList(_this.UserHobbyList), ...saveList(_this.SysHobbyList)];
      console.log(resultlist);
      if (resultlist.length) {
        let idList = '';
        for (let num = 0; num < resultlist.length; num++) {
          if (num !== 0) {
            idList += ',' + resultlist[num].id;
          }
          else {
            idList += resultlist[num].id;
          }
        }
        axios.post('/api/userHobby/update', {
          customerId: _this.cid,
          hobbyIds: idList
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
  },
  mounted() {
    const _this = this;
    _this.getInterstesList();
  },
  data() {
    const cid = localStorage.getItem('customerId');
    return {
      headerConfig: {
        backOnOff: true,
        title: '兴趣爱好'
      },
      SysHobbyList: [],
      UserHobbyList: [],
      cid: cid,
      addTxt: '',
      addNum: 2
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-interests-page{
        height: 100vh;
        background: #fff;
        position: relative;
        .handle-bar{
            width: rem(750px);
            height: rem(112px);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom:0;
            left: 0;
            right: 0;
            .cancel-btn{
                width:rem(324px);
                height:rem(68px);
                border-radius:rem(12px);
                border:rem(2px) solid rgba(255,102,90,1);
                font-size:rem(34px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,102,90,1);
                line-height: rem(68px);
                text-align: center;
                margin-right: rem(20px);
            }
            .save-btn{
                width:rem(324px);
                height:rem(68px);
                border-radius:rem(12px);
                border:rem(2px) solid rgba(255,102,90,1);
                background: rgba(255,102,90,1);
                font-size:rem(34px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height: rem(68px);
                text-align: center;
                margin-right: rem(20px);
            }
        }
    }
    .interests-list{
        padding-top: rem(138px);
        padding-left: rem(32px);
        padding-right: rem(32px);
        height: auto;
        .interest-item{
            float: left;
            font-size:rem(28px);
            font-family:PingFangSC-Semibold;
            font-weight:600;
            border-radius:rem(6px);
            border:rem(2px) solid rgba(255,122,109,1);
            height: rem(54px);
            color:rgba(255,135,129,1);
            line-height: rem(54px);
            padding: 0 rem(20px);
            margin: 0 rem(20px) rem(20px) 0;
            &.selected{
                color:rgba(255,255,255,1);
                border:rem(2px) solid rgba(255,122,109,1);
                background: rgba(255,122,109,1);
            }
            &.add-item{
                border:rem(2px) solid rgba(219,219,219,1);
                color:rgba(219,219,219,1);
            }
        }
    }
</style>
