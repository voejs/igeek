export default app => {
  return path => {
    return async (ctx, next) => {
      ctx.store.main.commit('current', path);
      await next();
    }
  }
};