<template>
  <flex blocked fulled class="page">
    <flex class="sidebar" :class="{close: closed}" direction="column" fulled>
      <div class="logo" v-redirect="'/'">
        <menu-title icon="social-chrome-outline">
          <flex blocked fulled direction="column">
            <flex class="name">{{$store.state.main.title}}</flex>
            <flex class="desc">{{$store.state.main.description}}</flex>
          </flex>
        </menu-title>
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
  import 'animate.css';
  Vue.use(iView);
  export default {
    name: "app-main",
    computed: {
      closed() {
        return this.$store.state.main.closed;
      }
    }
  }
</script>
<style lang="less" src="./app/extend/style.less"></style>