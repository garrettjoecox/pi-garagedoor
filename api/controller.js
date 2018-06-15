
const Gpio = require('onoff').Gpio;
const { promisify } = require('util');
const rc = require('rc')('local', {
  token: 'super_secret_token_that_you_should_replace',
});

const LEFTDOORPIN = 2;
const RIGHTDOORPIN = 3;

const leftOuput = new Gpio(LEFTDOORPIN, 'high');
const rightOutput = new Gpio(RIGHTDOORPIN, 'high');

module.exports = {
  token(ctx) {
    ctx.body = { token: rc.token };
  },
  async left(ctx) {
    await promisify(leftOuput.write)(Gpio.LOW);
    await wait(500);
    await promisify(leftOuput.write)(Gpio.HIGH);

    ctx.status = 200;
  },
  async right(ctx) {
    await promisify(rightOutput.write)(Gpio.LOW);
    await wait(500);
    await promisify(rightOutput.write)(Gpio.HIGH);

    ctx.status = 200;
  }
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}
