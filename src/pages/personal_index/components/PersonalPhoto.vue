<template>
    <section class="ml-personal-photo">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="photo-panel">
            <PublishImage @insertPhoto="insertPhoto" :insertList="insertList" @deleteItem="deletePhotoItem" :exhibitionData="exhibitionList" @deleteOriginal="deleteOriginal"></PublishImage>
        </section>
        <SureBtn txt="保存" class="save-btn" @click.native="savePhoto"></SureBtn>
    </section>
</template>
<script>
import HeaderModule from '@components/HeaderModule.vue';
import PublishImage from '@components/PublishImage.vue';
import SureBtn from '@components/SureBtn.vue';
import CancelBtn from '@components/CancelBtn.vue';
import axios from 'axios';
export default {
  components: {
    HeaderModule,
    PublishImage,
    SureBtn,
    CancelBtn
  },
  data() {
    const cid = localStorage.getItem('customerId');
    return {
      insertList: [],
      exhibitionList: [],
      cid: cid,
      headerConfig: {
        backOnOff: true,
        title: '个人影集'
      }
    };
  },
  mounted() {
    const _this = this;
    _this.getPhoto();
  },
  methods: {
    deletePhotoItem(index) {
      const _this = this;
      _this.$confirm({
        title: '您确定要删除这张照片？',
        sureBack() {
          _this.insertList.splice(index, 1);
          console.log(_this.insertList);
        }
      });
    },
    deleteOriginal(index) {
      const _this = this;
      _this.$confirm({
        title: '您确定要删除这张照片？',
        sureBack() {
          console.log('sureBack', _this.exhibitionList, index);
          axios.post('/api/photo/delete', {

            id: _this.exhibitionList[index].id
          })
            .then(function(response) {
              console.log(response);
              if (parseInt(response.data.code, 10) === 200) {
                _this.exhibitionList.splice(index, 1);
              }
              else {
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    savePhoto() {
      const _this = this;
      if (_this.insertList.length) {
        axios.post('/api/photo/insert', {

          customerId: _this.cid,
          imageUrls: _this.insertList
        })
          .then(function(response) {
            console.log(response);
            if (parseInt(response.data.code, 10) === 200) {
            }
            else {
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      else {
        // 没有保存的数据
        console.log('没有上传的数据');
      }
    },
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
    insertPhoto(url) {
      const _this = this;
      _this.insertList.push(url);
      console.log(_this.insertList);
    }
  }
};
</script>
<style lang="scss">
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-personal-photo{
        min-height: 100vh;
        width: 100%;
        height: auto;
        background: #fff;
        .photo-panel{
            margin-bottom: rem(40px);
            margin-top: rem(118px);
            .ml-publish-image{
                padding: 0;
                .ml-publish-imageItem{
                    width: rem(250px);
                    height: rem(250px);
                    margin: 0;
                    border-radius: unset;
                    .image-content{
                        border-radius: unset;
                    }
                }

            }
        }
        .save-btn{
            margin-bottom: rem(20px);
        }
    }
</style>
