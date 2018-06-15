
const Koa = require('koa');
const mount = require('koa-mount');
const kstatic = require('koa-static');
const path = require('path');
const router = require('./api/router');
const auth = require('koa-basic-auth');
const rc = require('rc')('local', {
  port: 9000,
  username: 'admin',
  password: 'admin',
});

const server = new Koa();

server
  .use(mount('/', kstatic(path.resolve(__dirname, 'public'))))
  .use(auth({ name: rc.username, pass: rc.password }))
  .use(router.routes());

server.listen(rc.port, () => {
  console.log(`Server listening on ${rc.port}`);
});
