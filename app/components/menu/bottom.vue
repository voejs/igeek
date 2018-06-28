<template>
  <Dropdown>
    <menu-title src="http://auth.u51-inc.com/avatar/shenyunjie">
      <flex blocked fulled direction="column" class="userinfo">
        <flex blocked class="name" :span="1" valign="middle">shenyunjie<Icon type="arrow-up-b"></Icon></flex>
        <flex blocked class="email" :span="1">shenyunjie@u51.com</flex>
      </flex>
    </menu-title>
    <DropdownMenu slot="list">
      <DropdownItem>驴打滚</DropdownItem>
      <DropdownItem>炸酱面</DropdownItem>
      <DropdownItem disabled>豆汁儿</DropdownItem>
      <DropdownItem>冰糖葫芦</DropdownItem>
      <DropdownItem divided>北京烤鸭</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  export default {
    name: "menu-bottom"
  }
</script>

<style lang="less" scoped>
.userinfo{
  .name{
    color: #383838;
    font-weight: 700;
    white-space: nowrap;
    i{
      margin-left: 5px;
      position: relative;
      top: 2px;
    }
  }
  .email{
    color:gray;
    font-size: 12px;
  }
}
</style>