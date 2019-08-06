<template>
    <section class="ml-select-dialog" style="display: none;" @click.stop="hideEditPanel">
        <section class="center-content">
            <h1 class="title">请选择您想编辑的栏目</h1>
            <section class="select-list">
                <section class="select-btn" v-for="(item,index) in list"  v-text="item.title" :key="index" @click.stop="openPage(item)"></section>
            </section>
        </section>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
const $ = require('jquery');
export default {
  computed: {
    ...mapGetters(['editPanelOnOff', 'tabIndex']),
    list() {
      const _this = this;
      let arr = [];
      switch (parseInt(_this.tabIndex, 10)) {
        case 0:
          arr = [
            { title: '基本资料', routerName: 'base' },
            { title: '兴趣爱好', routerName: 'interest' },
            { title: '个人影集', routerName: 'photo' },
            { title: '我想说的话', routerName: 'speak' },
            { title: '我想对你说的话', routerName: 'speak' },
            { title: '家庭情况', routerName: 'family' },
            { title: '个人情况', routerName: 'condition' },
            { title: '联系方式', routerName: 'link' }
          ];
          break;
        case 1:
          arr = [
            { title: '身份证' },
            { title: '学位证' },
            { title: '学历证' },
            { title: '职业相关证明' }
          ];
          break;
      }
      return arr;
    }
  },
  methods: {
    ...mapActions(['editPanel']),
    hideEditPanel() {
      const _this = this;
      _this.editPanel(false);
    },
    openPage(data) {
      const _this = this;
      console.log(data);
      _this.$router.push({ name: data.routerName });
    }
  },
  watch: {
    editPanelOnOff(n) {
      const element = $('.ml-select-dialog');
      console.log(n);
      if (n) {
        element.fadeIn(300);
      }
      else {
        element.hide();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@styles/components/SelectDialog.scss";
</style>
