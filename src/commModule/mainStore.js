import Vue from 'vue';
import store from './store/store.js';
import Tpl from './index.vue';
new Vue({
    store,
    render: h => h(Tpl)
}).$mount('#app');
