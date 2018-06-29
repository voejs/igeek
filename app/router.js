export default app => {
  const { router, middleware } = app;
  
  router.get('/', middleware.nav('index'), 'demo.hello');
  router.get('/404', 'system.notFound');
  router.get('/500', 'system.catchError');
  
  router.webview('/demo', 'demo');
  router.get('/demo/in', middleware.nav('animate:in'), 'demo.inAnimate');
  router.get('/demo/out', middleware.nav('animate:out'), 'demo.outAnimate');
}