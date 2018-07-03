<template>
  <div class="page-demo">
    <flex blocked align="center"><Button type="primary" v-redirect="url">切换路由</Button></flex>
    <Row :gutter="30">
      <Col :span="12" class="item left">
        <flex blocked direction="column" align="right">
          <flex blocked align="between" class="desc">
            <span>进场动画</span>
            <span>出场动画</span>
          </flex>
          <flex blocked align="between">
            <Select v-model="box1.enter" style="width:150px">
              <Option v-for="item in $store.state.demo.animates" :value="item" :key="item">{{ item }}</Option>
            </Select>
            <Select v-model="box1.leave" style="width:150px">
              <Option v-for="item in $store.state.demo.animates" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </flex>
          <flex blocked align="right" direction="column">
            <flex blocked class="box box1" v-for="(item, index) in $store.state.demo.list" :key="index" v-if="$store.state.demo.gmode===1">
              {{item.msg}}
            </flex>
          </flex>
        </flex>
      </Col>
      <Col :span="12" class="item right">
        <flex blocked direction="column">
          <flex blocked align="between" class="desc">
            <span>进场动画</span>
            <span>出场动画</span>
          </flex>
          <flex align="between" blocked>
            <Select v-model="box2.enter" style="width:150px">
              <Option v-for="item in $store.state.demo.animates" :value="item" :key="item">{{ item }}</Option>
            </Select>
            <Select v-model="box2.leave" style="width:150px">
              <Option v-for="item in $store.state.demo.animates" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </flex>
          <flex blocked direction="column">
            <flex blocked class="box box1" v-for="(item, index) in $store.state.demo.list" :key="index" v-if="$store.state.demo.gmode===2">
              {{item.msg}}
            </flex>
          </flex>
        </flex>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: "demo",
    data() {
      return {
        box1: {
          enter: 'bounceInLeft',
          leave: 'bounceOutLeft'
        },
        box2: {
          enter: 'bounceInRight',
          leave: 'bounceOutRight'
        }
      }
    },
    computed: {
      url() {
        return this.$store.state.demo.gmode === 1 ? '/animate/group/animate' : '/animate/group/vue';
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-demo{
    width: 100%;
    padding: 50px 30px;
    text-align: center;
    .box{
      text-align: center;
      position: relative;
      z-index: 100;
      padding: 10px;
      border:1px solid #58A4B0;
      margin: 5px 0;
    }
    .left{
      border-right:1px solid #eee;
    }
    .right{
      border-left:1px solid #eee;
      position: relative;
      left:-1px;
    }
    .item{
      padding-bottom: 30px;
      padding-top: 30px;
      .desc{
        span{
          line-height: 30px;
        }
      }
    }
  }
</style>