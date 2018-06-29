export default app => {
  return path => {
    return async (ctx, next) => {
      ctx.store.menu.commit('current', path);
      await next();
    }
  }
};