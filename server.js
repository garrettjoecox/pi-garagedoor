
const Koa = require('koa');
const kstatic = require('koa-static');
const path = require('path');
const router = require('./api/router');
const auth = require('koa-basic-auth');
const WebSocket = require('ws');
const raspividStream = require('raspivid-stream');
const rc = require('rc')('local', {
  port: 9000,
  wsPort: 9001,
});

const server = new Koa();
const wss = new WebSocket.Server({
  port: rc.wsPort,
});

server
  .use(router.routes())
  .use(kstatic(path.resolve(__dirname, 'public')));

server.listen(rc.port, () => {
  console.log(`Server listening on ${rc.port}`);
});

const stream = raspividStream();

stream.on('data', (data) => {
  ws.send(data, { binary: true }, (error) => {
    if (error) console.error(error);
  });
});
