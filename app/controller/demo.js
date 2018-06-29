import Controller from '@voejs/voe/class';
export default class DemoController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  hello(ctx) {
    ctx.body = ctx.webview.index;
    ctx.props = {
      text: this.store.state.demo.value
    }
  }
  
  inAnimate() {
    this.store.demo.commit('mode', 1);
  }
  
  outAnimate() {
    this.store.demo.commit('mode', 2);
  }
}