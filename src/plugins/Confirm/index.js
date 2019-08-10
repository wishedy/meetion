import Vue from 'vue';
import Confirm from './Confirm.vue';
const ToastTem = Vue.extend(Confirm);
let instance;
const confirm = (options) => {
  if (!instance) {
    instance = new ToastTem();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
  }
  console.log(options);
  instance.title = options.title;
  instance.cancelTitle = options.cancelTitle || '取消';
  instance.sureTitle = options.sureTitle || '确定';
  instance.show = true;
  instance.cancelBack = options.cancelBack;
  instance.sureBack = options.sureBack;
};
confirm.install = (Vue) => {
  console.log('install--------confirm');
  Vue.prototype.$confirm = confirm;
};
export default confirm;
