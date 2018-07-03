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
          <flex blocked align="right">
            <animation :enter="box1.enter" :leave="box1.leave" appear>
              <div class="box box1" v-if="$store.state.demo.mode===1"><span>Vue.js</span></div>
            </animation>
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
          <animation :enter="box2.enter" :leave="box2.leave" appear>
            <div class="box box2" v-if="$store.state.demo.mode===2"><span>Animate.css</span></div>
          </animation>
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
        return this.$store.state.demo.mode === 1 ? '/animate/single/animate' : '/animate/single/vue';
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
      display: inline-block;
      text-align: center;
      margin-top: 100px;
      position: relative;
      z-index: 100;
      span{
        color: #f35626;
        font-size: 50px;
        background-image: -webkit-linear-gradient(92deg,#f35626,#feab3a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: hue 60s infinite linear;
      }
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
  @-webkit-keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
  
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }
</style>