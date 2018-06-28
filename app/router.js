export default app => {
  const router = app.router;
  router.get('/', 'demo.hello');
}