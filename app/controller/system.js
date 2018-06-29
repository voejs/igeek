import Controller from '@voejs/voe/class';
export default class DemoController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  notFound() {
    this.ctx.body = this.ctx.webview.system.notFound;
    this.ctx.props = {
      referer: this.ctx.referer
    }
  }
  
  catchError() {
    this.ctx.body = this.ctx.webview.system.error;
  }
}