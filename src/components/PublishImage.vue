<template>
    <section class="ml-publish-image">
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem">
            <figure class="image-content"></figure>
            <i class="closeBtn">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem ml-publish-imageBar">
            <i class="icon"></i>
            <p>上传照片</p>
            <input accept="image/*" name="img" id="upload_file" type="file" class="ml-upload-image" @change="publishImage">
        </section>
    </section>
</template>
<script>
import axios from 'axios';
export default {
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
    return {
      imageUrl: ''
    };
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/publishImage.scss";
</style>
