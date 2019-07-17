import Vue from 'vue';
import store from './store/store.js';
import Tpl from './index.vue';
import '@styles/lib/base.scss';
new Vue({
    store,
    render: h => h(Tpl)
}).$mount('#app');
