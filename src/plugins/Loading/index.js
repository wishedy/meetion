import Vue from 'vue';
import Loading from './Loading.vue';
const LoadingEle = Vue.extend(Loading);
let instance;
/* const loading = (options) => {
  if (!instance) {
    instance = new LoadingEle();
    instance.vm = instance.$mount();
    console.log(this);
    instance.showLoading = () => {
      instance.show = true;
    };
    document.body.appendChild(instance.vm.$el);
  }
  console.log(options);
}; */
const loading = {
  showLoading() {
    instance = new LoadingEle();
    instance.vm = instance.$mount();
    instance.show = true;
    console.log('调用');
    document.body.appendChild(instance.vm.$el);
  },
  hideLoading() {
    console.log('逻辑进入', instance);
    document.body.removeChild(instance.vm.$el);
    instance.show = false;
    instance.vm.$destroy();
  }
};
/* loading.showLoading = (n) => {
  console.log(n);
  instance.show = true;
}; */
loading.install = (Vue) => {
  console.log('install--------loading');
  Vue.prototype.$loading = loading;
};
export default loading;
