import Vue from 'vue';
import vueErrorTips from './ErrorTips.vue';
const ToastTem = Vue.extend(vueErrorTips);
let instance;
let timer = null;
const errorTips = (options) => {
  if (!instance) {
    instance = new ToastTem();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
  }
  console.log(options);
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = '';
  }
  let time = 3000;
  if (typeof options === 'string') {
    instance.message = options;
  }
  else if (typeof options === 'object') {
    instance.message = options.message;
    time = options.time || 3000;
  }
  else {
    return;
  }
  instance.show = true;
  timer = setTimeout(() => {
    instance.show = false;
    clearTimeout(timer);
    timer = null;
    instance.message = '';
  }, time);
};
errorTips.close = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = '';
  }
};
errorTips.install = (Vue) => {
  console.log('install--------errorTips');
  Vue.prototype.$errorTips = errorTips;
};
export default errorTips;
