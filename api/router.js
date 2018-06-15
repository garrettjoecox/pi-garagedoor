
const Router = require('koa-router');
const auth = require('koa-basic-auth');
const controller = require('./controller');
const rc = require('rc')('local', {
  username: 'admin',
  password: 'admin',
  token: 'super_secret_token_that_you_should_replace',
});

const router = new Router({
  prefix: '/api',
});

router
  .get('/token', auth({ name: rc.username, pass: rc.password }), controller.token)
  .post('/left', verifyToken, controller.left)
  .post('/right', verifyToken, controller.right);

module.exports = router;

function verifyToken(ctx, next) {
  if (ctx.query.token !== rc.token) return ctx.throw(401);

  return next();
}
