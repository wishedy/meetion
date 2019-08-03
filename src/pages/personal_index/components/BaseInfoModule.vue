<template>
    <section class="ml-baseInfo-module">
        <TitleBar txt="基本资料"></TitleBar>
        <InfoBar labelTxt="姓名" infoContent="王梓睿"></InfoBar>
        <InfoBar labelTxt="性别" infoContent="男"></InfoBar>
        <InfoBar labelTxt="生日" infoContent="1991.07.31 - 27 - 巨蟹座"></InfoBar>
        <InfoBar labelTxt="家乡" infoContent="河南省 - 漯河市"></InfoBar>
        <InfoBar labelTxt="所在地" infoContent="北京"></InfoBar>
    </section>
</template>
<script>
import TitleBar from './UserInfoTitle';
import InfoBar from './InfoBar';
export default {
  components: {
    TitleBar,
    InfoBar
  }
};
</script>
