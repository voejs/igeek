export default (err, ctx) => {
  if (err.code && err.code === 404) return ctx.redirect('/404');
  ctx.redirect('/500');
}