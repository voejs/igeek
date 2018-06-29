<template>
  <div class="page-404">
    <h1>404 Not Found</h1>
    <p>抱歉，你所访问的页面不存在!</p>
    <p v-if="referer">来源：{{referer}}</p>
  </div>
</template>

<script>
  export default {
    name: "not-found",
    props: {
      referer: String
    }
  }
</script>

<style lang="less" scoped>
.page-404{
  width: 100%;
  h1{
    text-align: center;
    margin: 50px 0;
  }
  p{
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
  }
}
</style>