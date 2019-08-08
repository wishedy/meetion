import Vue from 'vue';
import vueToastMessage from './Toast.vue';
const ToastTem = Vue.extend(vueToastMessage);
let instance;
let timer = null;
const toast = (options) => {
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
toast.close = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = '';
  }
};
toast.install = (Vue) => {
  console.log('install--------toast');
  Vue.prototype.$toast = toast;
};
export default toast;
