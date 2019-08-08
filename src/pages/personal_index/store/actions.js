const actions = {
  changeTab: ({ commit, state }, num) => {
    commit('changeTab', num);
  },
  editPanel: ({ commit, state }, onOff) => {
    commit('editPanel', onOff);
  }
};
export default actions;
