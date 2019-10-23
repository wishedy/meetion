import Vue from 'vue';
import store from './store/store.js';
import Tpl from './index.vue';
import '@styles/lib/base.scss';
import Router from 'vue-router';
import routes from './router/router.config';
import ErrorTips from '@plugins/ErrorTips/errorTips.js';
import Progress from '@plugins/Progress/index.js';
import Confirm from '@plugins/Confirm/index.js';
Vue.use(Router);
Vue.use(ErrorTips);
Vue.use(Progress);
Vue.use(Confirm);
const router = new Router(routes);
new Vue({
  router,
  store,
  render: h => h(Tpl)
}).$mount('#app');
