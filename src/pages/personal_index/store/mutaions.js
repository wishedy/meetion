const mutaions = {
  changeTab(state, num) {
    state.tabIndex = num;
  },
  editPanel(state, onOff) {
    console.log(onOff);
    state.editPanelOnOff = onOff;
  }
};
export default mutaions;
