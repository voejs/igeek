<template>
  <div class="page-index">{{text}}</div>
</template>

<script>
  export default {
    name: "index",
    props: {
      text: String
    }
  }
</script>

<style lang="less" scoped>
.page-index{
  width: 100%;
  font-size: 20px;
  padding: 50px 0;
  text-align: center;
}
</style>