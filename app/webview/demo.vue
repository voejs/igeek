<template>
  <div>{{text}}
    <p>{{$store.state.system.request.path}}: {{$store.state.system.request.query}}</p>
  </div>
</template>

<script>
  export default {
    name: "demo",
    props: {
      text: String
    }
  }
</script>

<style scoped>

</style>