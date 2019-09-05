<template>
    <section class="ml-photo-module">
        <TitleBar txt="个人影集"></TitleBar>
        <section class="ml-photo-list">
            <figure class="ml-photo-item" v-for="(item,index) in list" :style="{'background':`url('${item.imageUrl}') no-repeat center center/cover`}" :key="item.id" v-if="index<4" :class="{'more':index===3}" @click.stop="viewBigImage(index)">
                <section class="mask" v-if="list.length>3" @click.stop="editPhoto">
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
            </figure>
        </section>
    </section>
</template>
<script>
import TitleBar from './UserInfoTitle';
export default {
  components: {
    TitleBar
  },
  methods: {
    editPhoto() {
      const _this = this;
      _this.$router.push({ name: 'photo' });
    },
    viewBigImage(index) {
      const _this = this;
      const resultList = [];
      for (let num = 0; num < _this.list.length; num++) {
        resultList.push(
          {
            imageSrc: _this.list[num].imageUrl
          }
        );
      }
      _this.$bigImage({
        imageArr: resultList,
        index: index
      });
    }
  },
  props: {
    list: {
      default() {
        return [];
      },
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-photo-module{
        width: 100%;
        height: rem(318px);
        background: #fff;
        margin-bottom: rem(4px);
        &:after {
            content: '';
            display: table;
            clear: both;
        }
        .ml-photo-list{
            padding: rem(32px) rem(48px) rem(48px) rem(48px);
            height: rem(148px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .ml-photo-item{
                width:rem(142px);
                height:rem(148px);
                border-radius:rem(6px);
                background: url("https://b-ssl.duitang.com/uploads/item/201603/16/20160316144337_QAU2B.jpeg") no-repeat center center/cover;
                overflow: hidden;
                position: relative;
                &.more{
                 .mask{
                     width:rem(142px);
                     height:rem(148px);
                     background:rgba(0,0,0,0.55);
                     border-radius:rem(6px);
                     position: absolute;
                     top:0;
                     bottom:0;
                     left: 0;
                     right: 0;
                     display: flex;
                     flex-direction: row;
                     align-items: center;
                     justify-content: center;
                     span{
                         border-radius: 50%;
                         width:rem(10px);
                         height:rem(10px);
                         &:nth-of-type(1){
                             background: #84868A;

                         }
                         &:nth-of-type(2){
                             background: #B6BBC6;
                             margin-left: rem(7px);
                             margin-right: rem(7px);
                         }
                         &:nth-of-type(3){
                             background: #fff;
                         }
                     }
                 }
                }
            }
        }
    }

</style>
