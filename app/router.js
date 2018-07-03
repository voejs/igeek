export default app => {
  const { router, middleware } = app;
  
  router.get('/', middleware.nav('index'), 'demo.hello');
  router.get('/404', 'system.notFound');
  router.get('/500', 'system.catchError');
  
  router.webview('/animate/single', 'animateSingle');
  router.get('/animate/single/vue', middleware.nav('animate:single'), 'demo.inAnimate');
  router.get('/animate/single/animate', middleware.nav('animate:single'), 'demo.outAnimate');
  
  router.webview('/animate/group', 'animateGroup');
  router.get('/animate/group/vue', middleware.nav('animate:group'), 'demo.inGroup');
  router.get('/animate/group/animate', middleware.nav('animate:group'), 'demo.outGroup');
}