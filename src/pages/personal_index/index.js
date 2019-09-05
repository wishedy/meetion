import Vue from 'vue';
import store from './store/store.js';
import Tpl from './index.vue';
import '@styles/lib/base.scss';
import '@styles/components/pickerReset.scss';
import Router from 'vue-router';
import Toast from '@plugins/Toast/toast.js';
import ErrorTips from '@plugins/ErrorTips/errorTips.js';
import Confirm from '@plugins/Confirm/index.js';
import Progress from '@plugins/Progress/index.js';
import routes from './router/router.config';
import AwesomePicker from '@plugins/Picker/index.js';
import Loading from '@plugins/Loading/index.js';
import BigImage from '@plugins/BigImage/index.js';
Vue.use(AwesomePicker);
Vue.use(Router);
Vue.use(Toast);
Vue.use(ErrorTips);
Vue.use(Confirm);
Vue.use(Progress);
Vue.use(Loading);
Vue.use(BigImage);
const router = new Router(routes);
new Vue({
  router,
  store,
  render: h => h(Tpl)
}).$mount('#app');
