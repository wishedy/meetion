<template>
    <section class="ml-publish-image">
        <section class="ml-publish-imageItem" v-for="(item,index) in exhibitionData" :key="item.id">
            <figure class="image-content" :style="{'background':`url('${item.imageUrl}') no-repeat center center/cover`}"></figure>
            <i class="closeBtn" @click.stop="closeOriginalItem(index)">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem" v-for="(item,index) in insertList" :key="index">
            <figure class="image-content" :style="{'background':`url('${item}') no-repeat center center/cover`}"></figure>
            <i class="closeBtn" @click.stop="closeItem(index)">
                <em class="icon"></em>
            </i>
        </section>
        <section class="ml-publish-imageItem ml-publish-imageBar" v-if="publishOnOff">
            <i class="icon"></i>
            <p>上传照片</p>
            <input accept="image/*" name="img" id="upload_file" type="file" class="ml-upload-image" @change="publishImage">
        </section>
    </section>
</template>
<script>
import axios from 'axios';
import Common from '@scripts/lib/common.js';
export default {
  props: {
    publishMaxLen: {
      default() {
        return 10000;
      },
      type: Number
    },
    insertList: {
      default() {
        return [];
      },
      type: Array
    },
    exhibitionData: {
      default() {
        return [];
      },
      type: Array
    }
  },
  computed: {
    publishOnOff() {
      const _this = this;
      if (_this.exhibitionData.length) {
        return (_this.exhibitionData.length < _this.publishMaxLen);
      }
      else {
        return (_this.insertList.length < _this.publishMaxLen);
      }
    }
  },
  methods: {
    publishImage(e) {
      const _this = this;
      const file = e.target.files[0];
      const param = new FormData(); // 创建form对象
      param.append('file', file, file.name);// 通过append向form对象添加数据
      param.append('chunk', '0');// 添加form表单中其他数据
      console.log(param.get('file')); // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let upLoadProgress = 0;
      const uploadTimer = setInterval(() => {
        if (upLoadProgress > 95) {
          clearInterval(uploadTimer);
        }
        else {
          console.log(upLoadProgress);
          _this.$progress(`${upLoadProgress++}%`);
        }
      }, 80);
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }; // 添加请求头
      axios.post('/api/upload/uploadImg', param, config)
        .then(response => {
          console.log(response.data);
          if (!Common.checkInvalid(response.data.result.url)) {
            _this.$progress(`100%`);
            _this.$progress(`√`);
            _this.$progress(`上传成功`);
            clearInterval(uploadTimer);

            _this.$emit('insertPhoto', response.data.result.url);
          }
          else {
            _this.$progress(`上传失败`);
            clearInterval(uploadTimer);
          }
        }).catch(function(error) {
          console.log(error);
          _this.$progress(`上传失败`);
          clearInterval(uploadTimer);
        });
    },
    closeItem(index) {
      const _this = this;
      _this.$confirm({
        title: '您确定要删除这张照片？',
        sureBack() {
          _this.$emit('deleteItem', index);
        }
      });
    },
    closeOriginalItem(index) {
      const _this = this;
      _this.$confirm({
        title: '您确定要删除这张照片？',
        sureBack() {
          _this.$emit('deleteOriginal', index);
        }
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
