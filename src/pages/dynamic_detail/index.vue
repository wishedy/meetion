<template>
    <section class="ml-mainInner">
        <HeaderModule :config="headerConfig"></HeaderModule>
        <section class="ml-dynamic-detail">
            <Dynamic></Dynamic>
        </section>
        <AddComent></AddComent>
    </section>
</template>

<script type="text/ecmascript-6">
import HeaderModule from '@components/HeaderModule.vue';
import AddComent from '@components/AddComent.vue';
import Dynamic from '@components/Dynamic.vue';
export default {
  components: {
    HeaderModule,
    AddComent,
    Dynamic
  },
  data() {
    return {
      headerConfig: {
        backOnOff: true,
        title: '动态'
      }
    };
  },
  beforeMount() {
  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "@styles/pages/dynamic_detail/dynamic_detail.scss";
</style>
