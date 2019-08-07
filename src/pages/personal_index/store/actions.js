const actions = {
  changeTab: ({ commit, state }, num) => {
    commit('changeTab', num);
  },
  editPanel: ({ commit, state }, onOff) => {
    commit('editPanel', onOff);
  },
    changeLinkInfo:({commit,state},info)=>{
        commit('changeLinkInfo', info);
    }
};
export default actions;
