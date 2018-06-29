<template>
  <flex class="topbar" blocked valign="middle" align="between">
    <flex class="left" valign="middle" fulled>
      <Icon type="navicon-round" class="toggle" @click.native="toggle"></Icon>
      <Breadcrumb class="bread">
        <BreadcrumbItem v-redirect="item.link" v-for="item in breads" :key="item.idPath">{{item.name}}</BreadcrumbItem>
      </Breadcrumb>
    </flex>
    <flex class="right">
      <Icon type="paper-airplane" class="item"></Icon>
      <Icon type="filing" class="item"></Icon>
      <Icon type="wand" class="item"></Icon>
      <Icon type="code-working" class="item"></Icon>
    </flex>
  </flex>
</template>

<script>
  export default {
    name: "top-bar",
    methods: {
      toggle() {
        this.$store.menu.commit('closed', !this.$store.state.menu.closed);
      }
    },
    computed: {
      breads() {
        const map = this.$store.menu.get('navMap');
        const current = this.$store.menu.get('current');
        if (!current) return [];
        const result = [];
        const steps = current.split(':');
        let path = [];
        for (let i = 0; i < steps.length; i++) {
          path.push(steps[i]);
          const name = path.join(':');
          if (map[name]) {
            result.push(map[name]);
          }
        }
        return result;
      }
    }
  }
</script>

<style scoped>

</style>