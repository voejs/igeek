<template>
  <flex blocked class="menu-title" overflow="hide" :class="{ closed:closed, show: show, selected: selected }">
    <flex class="icon" v-if="icon || src" align="center" valign="middle">
      <Icon :type="icon" class="menu-icon" v-if="icon"></Icon>
      <Avatar :src="src" :shape="shape" v-else></Avatar>
    </flex>
    <transition name="fade">
      <flex :span="1" fulled valign="middle" v-if="!closed || show" class="menu-title-content"><slot></slot></flex>
    </transition>
  </flex>
</template>

<script>
  export default {
    name: "menu-title",
    props: {
      icon: String,
      animate: Boolean,
      src: String,
      show: Boolean,
      radius: Boolean,
      idPath: String
    },
    computed: {
      closed() {
        return this.$store.state.menu.closed;
      },
      shape() {
        return this.radius ? 'circle' : 'square';
      },
      selected() {
        return this.idPath && this.$store.state.menu.current
          ? this.$store.state.menu.current.indexOf(this.idPath) > -1
          : false;
      }
    }
  }
</script>

<style lang="less" scoped>
@height:45px;
.menu-title{
  height: @height;
  font-size: 14px;
  cursor: pointer;
  border-left: 2px solid transparent;
  transition:all .3s ease;
  .icon{
    padding: 0 8px 0 20px;
    width: 60px;
    height: @height;
    font-size: 16px;
    i.menu-icon{
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 100%;
      background-color: transparent;
      transition:all .3s ease;
    }
  }
  .menu-title-content{
    width: 158px;
    white-space: nowrap;
  }
  &.closed{
    .icon{
      i.menu-icon{
        background-color: #eee;
      }
    }
  }
  &.show{
    font-size: 12px;
    .icon{
      padding: 0 8px 0 6px;
      width: 36px;
      height: @height;
      font-size: 16px;
      i.menu-icon{
        display: inline-block;
        width: 20px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 100%;
        background-color: transparent;
        transition:all .3s ease;
      }
    }
  }
  &.selected{
    border-color:#f56c6b;
    &.closed{
      border-color:transparent;
      background-color: rgba(245,108,107, .1);
      .icon i.menu-icon{
        background-color: transparent;
        color:#C95958;
      }
      &.show{
        border-color:#f56c6b;
        background-color: #fff;
        &:hover{
          background-color: rgba(245,108,107, .1)
        }
        .icon i.menu-icon{
          background-color: transparent;
          color:#333;
        }
      }
      &:hover{
        .icon i.menu-icon{
          color:#C95958;
        }
      }
    }
  }
}
</style>