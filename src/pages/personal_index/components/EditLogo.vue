<template>
    <section class="ml-edut-logo">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <figure class="logo"></figure>
        <section class="edit-bar">
            <div class="edit-btn">编辑
                <input accept="image/*" name="img" id="upload_file" type="file" class="ml-upload-image" @change="publishImage">
            </div>
        </section>
    </section>
</template>
<script>
import axios from 'axios';
import HeaderModule from '@components/HeaderModule.vue';
export default {
  components: {
    HeaderModule
  },
  methods: {
    publishImage() {
      // const _this = this;
      var file = document.getElementById('upload_file').files[0];
      var formdata1 = new FormData();// 创建form对象
      formdata1.append('img', file, file.name);// 通过append向form对象添加数据,可以通过append继续添加数据
      // 或formdata1.append('img',file);
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }; // 添加请求头
      axios.post('/api/upload/uploadImg', formdata1, config).then(function(response) {
        console.log(response);
      });
    }
  },
  data() {
    const _this = this;
    const headerTitle = _this.$route.query['editTitle'];
    return {
      headerConfig: {
        backOnOff: true,
        title: headerTitle
      }
    };
  }
};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-edut-logo{
        width: 100%;
        height: 100vh;
        background: #333;
        position: relative;
        .ml-header-module{
            background: #333;
        }
        .logo{
            width:rem(750px);
            height:rem(750px);
            border-radius:rem(12px);
            position: absolute;
            left: 0;
            right: 0;
            top:rem(198px);
            background: url("https://dpic2.tiankong.com/lt/9v/QJ6170661618.jpg?x-oss-process=style/240h") no-repeat center center/cover;
        }
        .edit-bar{
            width:rem(750px);
            height:rem(88px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background:rgba(255,255,255,1);
            position: absolute;
            bottom:0;
            left: 0;
            right: 0;

            .edit-btn{
                width:rem(670px);
                height:rem(68px);
                background:linear-gradient(90deg,rgba(255,174,162,1) 0%,rgba(255,122,109,1) 100%);
                border-radius:rem(30px);
                font-size:rem(34px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height: rem(68px);
                text-align: center;
                position: relative;
                input{
                    position: absolute;
                    top:0;
                    right: 0;
                    bottom:0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    font-size: 0;
                    outline: none;
                    border: none;
                }
            }
        }
    }
</style>
