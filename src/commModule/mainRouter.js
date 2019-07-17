import Vue from 'vue';
import Tpl from './index.vue';
import Router from 'vue-router';
import routes from './router/router.config';
Vue.use(Router);
const router = new Router(routes);
new Vue({
    router,
    render: h => h(Tpl)
}).$mount('#app');
