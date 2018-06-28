<template>
  <flex class="topbar" blocked valign="middle" align="between">
    <flex class="left" valign="middle" fulled>
      <Icon type="navicon-round" class="toggle" @click.native="toggle"></Icon>
      <Breadcrumb class="bread">
        <BreadcrumbItem v-redirect="'/'">iGeek</BreadcrumbItem>
        <BreadcrumbItem v-redirect="'/'">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
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
    name: "top-bar"
  }
</script>

<style scoped>

</style>