import Vue from 'vue';
import BigImage from './BigImage.vue';
const BigImageEm = Vue.extend(BigImage);
let instance;
const bigImage = (options) => {
  instance = new BigImageEm();
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.bigImageData = options.bigImageData;
  instance.index = options.index;
  instance.destroyOnOff = true;
  console.log('调用组件在这里');
};
bigImage.install = (Vue) => {
  console.log('install--------bigImage');
  Vue.prototype.$bigImage = bigImage;
};
export default bigImage;
