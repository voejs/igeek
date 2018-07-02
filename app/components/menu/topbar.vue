<template>
  <flex class="topbar" blocked valign="middle" align="between">
    <flex class="left" valign="middle" fulled>
      <Icon type="navicon-round" class="toggle" @click.native="toggle"></Icon>
      <Breadcrumb class="bread">
        <BreadcrumbItem v-redirect="item.link" v-for="item in breads" :key="item.idPath">{{item.name}}</BreadcrumbItem>
      </Breadcrumb>
    </flex>
    <flex class="right" valign="middle">
      <Icon type="paper-airplane" class="item"></Icon>
      <Icon type="filing" class="item"></Icon>
      <Icon type="wand" class="item"></Icon>
      <Icon type="code-working" class="item"></Icon>
      <a href="https://github.com/voejs/igeek" target="_blank" class="item"><Icon type="social-github"></Icon></a>
    </flex>
  </flex>
</template>

<script>
  export default {
    name: "top-bar",
    methods: {
      toggle() {
        this.$store.main.commit('toggle', !this.$store.state.main.closed);
      },
      github() {
      
      }
    },
    computed: {
      breads() {
        const map = this.$store.main.get('navMap');
        const current = this.$store.main.get('current');
        if (!current) return [];
        const result = [];
        const steps = current.split(':');
        let path = [];
        for (let i = 0; i < steps.length; i++) {
          path.push(steps[i]);
          const name = path.join(':');
          if (map[name]) {
            result.push(map[name]);
          }
        }
        return result;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../extend/var";
  .topbar{
    height: 45px;
    background-color: @topbar-bg-color;
    color: @topbar-color;
    padding: 0 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.1);
    .toggle{
      font-size: 20px;
      cursor: pointer;
    }
    .left,.right{
      font-size: 14px;
    }
    .right{
      a.item, i.item{
        margin-left: 30px;
        font-size: 18px;
        cursor: pointer;
      }
    }
    .bread{
      color:#fff;
      margin-left: 20px;
      a{
        color: @topbar-color;
        &:link,&:visited{
          color: @topbar-color;
        }
        &:hover{
          color:@topbar-color-hover;
        }
      }
      span{
        color: @topbar-color;
      }
      a,span{
        cursor: pointer;
      }
    }
  }
</style>