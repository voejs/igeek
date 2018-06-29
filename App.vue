<template>
  <flex blocked fulled class="page">
    <flex class="sidebar" :class="{close: closed}" direction="column" fulled>
      <div class="logo" v-redirect="'/'">
        <menu-title :src="logo">Voe - iGeek Demo</menu-title>
      </div>
      <flex :span="1" overflow="auto" blocked class="center" direction="column">
        <menu-list></menu-list>
      </flex>
      <div class="bottom">
        <menu-bottom></menu-bottom>
      </div>
    </flex>
    <flex class="container" :span="1" fulled direction="column">
      <top-bar></top-bar>
      <flex :span="1" overflow="auto" blocked>
        <render></render>
      </flex>
    </flex>
  </flex>
</template>

<script>
  import Vue from 'vue';
  import iView from 'iview';
  Vue.use(iView);
  export default {
    name: "app-main",
    computed: {
      logo() {
        return 'https://51nbimg.u51.com/cadcd461b4c848568769ab22abacc738.png';
      },
      closed() {
        return this.$store.state.menu.closed;
      }
    }
  }
</script>
<style lang="less" src="./app/extend/style.less"></style>