<template>
  <flex blocked fulled class="page">
    <flex class="sidebar" :class="{close: $store.state.menu.closed}" direction="column" fulled>
      <div class="logo" v-redirect="'/'">
        <menu-title icon="social-chrome-outline">iGeek</menu-title>
      </div>
      <flex :span="1" overflow="auto" blocked class="center" direction="column">
        <div class="title">系统导航</div>
        <menu-group :data-source="$store.state.menu.navigate"></menu-group>
        <div class="title">系统导航</div>
        <menu-group :data-source="$store.state.menu.navigate"></menu-group>
        <div class="title">系统导航</div>
        <menu-group :data-source="$store.state.menu.navigate"></menu-group>
      </flex>
      <div class="bottom">
        <menu-bottom></menu-bottom>
      </div>
    </flex>
    <flex class="container" :span="1" fulled direction="column">
      <flex class="topbar" blocked valign="middle" align="between">
        <div class="left">
          <Icon type="navicon-round" class="toggle" @click.native="toggle"></Icon>
        </div>
        <div class="right"></div>
      </flex>
      <flex blocked valign="middle" class="bread">
        <Breadcrumb>
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </flex>
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
    methods: {
      toggle() {
        this.$store.menu.commit('closed', !this.closed);
      }
    },
    computed: {
      closed() {
        return this.$store.state.menu.closed;
      }
    }
  }
</script>
<style lang="less" src="./app/extend/style.less"></style>