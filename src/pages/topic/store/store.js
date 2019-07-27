import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import mutations from './mutaions.js';
import actions from './actions.js';
import getters from './getters.js';
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
