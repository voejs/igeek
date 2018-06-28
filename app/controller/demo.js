import Controller from '@voejs/voe/class';
export default class DemoController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  hello(ctx) {
    ctx.body = ctx.webview.demo;
    ctx.props = {
      text: this.store.state.demo.value
    }
  }
}