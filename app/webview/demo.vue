<template>
  <div class="page-demo">
    <transition name="slide-fade" appear>
      <div class="box" v-if="$store.state.demo.mode===1">1</div>
    </transition>
    <transition name="slide-fade2" appear>
      <div class="box" v-if="$store.state.demo.mode===2">2</div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "demo"
  }
</script>

<style lang="less" scoped>
  .page-demo{
    width: 100%;
    padding: 50px 0;
    text-align: center;
    .box{
      display: inline-block;
      background-color: #58A4B0;
      width: 100px;
      height: 100px;
      color:#fff;
      text-align: center;
      line-height: 100px;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(500px);
    opacity: 0;
  }

  .slide-fade2-enter-active {
    transition: all .3s ease;
  }
  .slide-fade2-leave-active {
    transition: all .8s ease;
  }
  .slide-fade2-enter, .slide-fade2-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-500px);
    opacity: 0;
  }
</style>