<template>
  <ul>
    <li v-for="(item, index) in dataSource">
      <menu-title :icon="item.icon" v-redirect="item.link" :show="show" :id-path="item.idPath">{{item.name}}</menu-title>
      <menu-group v-if="item.children && item.children.length" :data-source="item.children" show></menu-group>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "menu-group",
    props: {
      dataSource: Array,
      show: Boolean
    }
  }
</script>

<style scoped>

</style>