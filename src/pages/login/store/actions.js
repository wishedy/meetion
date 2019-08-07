const actions = {
  changeResidueNum: ({ commit, state }, num) => {
    commit('changeResidueNum', num);
  },
  changeCodeNum: ({ commit, state }, num) => {
    commit('changeCodeNum', num);
  },
  setPhoneNum: ({ commit, state }, num) => {
    commit('setPhoneNum', num);
  },
  changeCodeState: ({ commit, state }, onOff) => {
    commit('changeCodeState', onOff);
  }
};
export default actions;
