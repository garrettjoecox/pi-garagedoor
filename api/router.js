
const Router = require('koa-router');
const controller = require('./controller');

const router = new Router({
  prefix: '/api',
});

router
  .post('/left', controller.left)
  .post('/right', controller.right);

module.exports = router;
