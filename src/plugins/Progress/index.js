import Vue from 'vue';
import vueProgressMessage from './Progress.vue';
const ProgressTem = Vue.extend(vueProgressMessage);
let instance;
let timer = null;
const progress = (options) => {
  if (!instance) {
    instance = new ProgressTem();
    instance.vm = instance.$mount();
  }
  document.body.appendChild(instance.vm.$el);
  console.log(options);
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = '';
  }
  if (typeof options === 'string') {
    instance.message = options;
  }
  else if (typeof options === 'object') {
    instance.message = options.message;
  }
  else {
    return;
  }
  instance.show = true;
  if (instance.message.indexOf('上传成功') > -1 || instance.message.indexOf('上传失败') > -1) {
    setTimeout(() => {
      instance.show = false;
      instance.vm.$destroy();
      if (instance.vm.$el) {
        document.body.removeChild(instance.vm.$el);
      }
    }, 800);
  }
  /* timer = setTimeout(() => {
        instance.show = false;
        clearTimeout(timer);
        timer = null;
        instance.message = '';
    }, time); */
};
progress.install = (Vue) => {
  console.log('install--------progress');
  Vue.prototype.$progress = progress;
};
export default progress;
