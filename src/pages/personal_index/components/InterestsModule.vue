<template>
    <section class="ml-interest-module">
        <TitleBar txt="兴趣爱好"></TitleBar>
        <section class="ml-interest-list">
            <span class="interest-item" :style="createColor()" v-for="(item,index) in hobbyList"  v-text="item.describes" :key="item.id" v-if="index<7">
            </span>
            <span class="interest-more" v-if="hobbyList.length>7" @click.stop="editHobbyList">
                <em></em>
                <em></em>
                <em></em>
            </span>

        </section>
    </section>
</template>
<script>
import TitleBar from './UserInfoTitle';
import axios from 'axios';
export default {
  components: {
    TitleBar
  },
  computed: {
    hobbyList() {
      const _this = this;
      const list = [];
      const checkSign = (data) => {
        for (let num = 0; num < data.length; num++) {
          const dataItem = data[num];
          if (dataItem.sign) {
            list.push(dataItem);
          };
        }
      };
      checkSign(_this.SysHobbyList);
      checkSign(_this.UserHobbyList);
      return list;
    }
  },
  data() {
    const cid = localStorage.getItem('customerId');
    return {
      cid: cid,
      SysHobbyList: [],
      UserHobbyList: []
    };
  },
  methods: {
    editHobbyList() {
      const _this = this;
      _this.$router.push({ name: 'interest' });
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
    createColor() {
      const colorArr = ['247,181,1', '149,200,99', '255,81,83', '212,107,8', '64,169,255'];
      const selectColor = colorArr[Math.floor((Math.random() * colorArr.length))];
      const resultColor = { background: `rgba(${selectColor},.5)`, border: `.026667rem solid rgba(${selectColor},1)` };
      return resultColor;
    }
  },
  mounted() {
    const _this = this;
    _this.getInterstesList();
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-interest-module{
        height: rem(294px);
        margin-bottom: rem(4px);
        background: #ffffff;
    }
    .ml-interest-list{
        padding: rem(48px) rem(40px) rem(28px) rem(40px);
        height: rem(128px);
        .interest-item{
            float: left;
            font-size:rem(28px);
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:#fff;
            height: rem(54px);
            line-height: rem(54px);
            padding: 0 rem(20px);
            margin: 0 rem(20px) rem(20px) 0;
        }
        .interest-more{
            float: left;
            width:rem(28px);
            height:rem(54px);
            background:rgba(236,236,236,1);
            border-radius:rem(6px);
            border:rem(2px) solid rgba(219,219,219,1);
            line-height: rem(54px);
            text-align: center;
            font-size: rem(44px);
            color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 rem(18px);
            em{
                width:rem(8px);
                height:rem(8px);
                border-radius: 50%;
                background: #ffffff;
                display: inline-block;
            }

        }
    }
</style>
