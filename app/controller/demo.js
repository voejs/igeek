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
  
  inGroup() {
    this.store.demo.commit('list1', this.store.state.demo.list);
    this.store.demo.commit('list2', []);
  }
  
  outGroup() {
    this.store.demo.commit('list2', this.store.state.demo.list);
    this.store.demo.commit('list1', []);
  }
}