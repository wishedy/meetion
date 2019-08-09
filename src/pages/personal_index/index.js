import Vue from 'vue';
import store from './store/store.js';
import Tpl from './index.vue';
import '@styles/lib/base.scss';
import '@styles/components/pickerReset.scss';
import Router from 'vue-router';
import Toast from '@plugins/Toast/toast.js';
import ErrorTips from '@plugins/ErrorTips/errorTips.js';
import routes from './router/router.config';
import AwesomePicker from 'vue-awesome-picker';
Vue.use(AwesomePicker);
Vue.use(Router);
Vue.use(Toast);
Vue.use(ErrorTips);
const router = new Router(routes);
new Vue({
  router,
  store,
  render: h => h(Tpl)
}).$mount('#app');
