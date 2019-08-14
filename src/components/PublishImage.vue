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
    publishImage(e) {
      const file = e.target.files[0];
      const param = new FormData(); // 创建form对象
      param.append('file', file, file.name);// 通过append向form对象添加数据
      param.append('chunk', '0');// 添加form表单中其他数据
      console.log(param.get('file')); // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }; // 添加请求头
      axios.post('/api/upload/uploadImg', param, config)
        .then(response => {
          console.log(response.data);
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
