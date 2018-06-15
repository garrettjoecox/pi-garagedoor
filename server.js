
const Koa = require('koa');
const kstatic = require('koa-static');
const path = require('path');
const router = require('./api/router');
const auth = require('koa-basic-auth');
const rc = require('rc')('local', {
  port: 9000,
});

const server = new Koa();

server
  .use(router.routes())
  .use(kstatic(path.resolve(__dirname, 'public')))

server.listen(rc.port, () => {
  console.log(`Server listening on ${rc.port}`);
});
