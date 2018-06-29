<template>
  <leg-head :show="!closed" placement="center"><slot></slot></leg-head>
</template>

<script>
  export default {
    name: "menu-tip",
    computed: {
      closed() {
        return this.$store.state.main.closed;
      }
    }
  }
</script>