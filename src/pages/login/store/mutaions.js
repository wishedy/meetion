const mutaions = {
  changeResidueNum(state, num) {
    state.residueNum = num;
  },
  changeCodeNum(state, num) {
    state.codeNum = num;
  },
  setPhoneNum(state, num) {
    state.phoneNum = num;
  },
  changeCodeState(state, onOff) {
    state.onCoding = onOff;
  }
};
export default mutaions;
