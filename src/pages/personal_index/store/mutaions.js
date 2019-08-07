const mutaions = {
  changeTab(state, num) {
    state.tabIndex = num;
  },
    changeLinkInfo(state, info) {
    switch (parseInt(info.type,10)) {
        case 0:
            state.linkInfo.tencentNum = info.num;
          break;
        case 1:
            state.linkInfo.weChatNum = info.num;
          break;
        case 2:
            state.linkInfo.phoneNum = info.num;
          break;
        case 3:
            state.linkInfo.email = info.num;
          break;
        case 4:
            state.linkInfo.otherNum = info.num;
          break;
    }
    state.tabIndex = num;
  },
  editPanel(state, onOff) {
    console.log(onOff);
    state.editPanelOnOff = onOff;
  }
};
export default mutaions;
