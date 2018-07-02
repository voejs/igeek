<template>
  <flex class="leg-head" :style="{padding: padding}" :align="placement" valign="middle">
    <flex class="leg-head-text" v-if="show">
      <slot></slot>
    </flex>
  </flex>
</template>

<script>
  export default {
    name: "leg-head",
    props: {
      show: Boolean,
      placement: {
        type: String,
        default: 'left'
      },
      offset: {
        type: Number,
        default: 15
      }
    },
    computed: {
      padding() {
        return '0 ' + this.offset + 'px';
      }
    }
  }
</script>

<style lang="less" scoped>
@leg-height: 30px;
.leg-head{
  height: @leg-height + 1px;
  position: relative;
  overflow: hidden;
  &:before{
    position: absolute;
    top: @leg-height / 2;
    left: 0;
    background-color: #eee;
    content: ' ';
    height: 1px;
    width: 100%;
  }
  .leg-head-text{
    height: @leg-height;
    line-height: @leg-height;
    padding: 0 @leg-height/2;
    position: relative;
    background-color: #fff;
  }
}
</style>