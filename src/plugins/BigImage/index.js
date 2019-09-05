import Vue from 'vue';
import BigImage from './BigImage.vue';
const BigImageEm = Vue.extend(BigImage);
let instance;
const bigImage = (options) => {
  console.log(instance + '+++++++');
  instance = new BigImageEm();
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  console.log(options);
  instance.imageArr = options.imageArr;
  instance.localIndex = options.index;
  instance.destroyOnOff = true;
  console.log(instance);
};
bigImage.install = (Vue) => {
  console.log('install--------bigImage');
  Vue.prototype.$bigImage = bigImage;
};
export default bigImage;
