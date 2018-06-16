
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
    await write(leftOuput, Gpio.LOW);
    await wait(500);
    await write(leftOuput, Gpio.HIGH);

    ctx.status = 200;
  },
  async right(ctx) {
    await write(rightOutput, Gpio.LOW);
    await wait(500);
    await write(rightOutput, Gpio.HIGH);

    ctx.status = 200;
  }
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

function write(output, value) {
  return new Promise((resolve) => {
    output.write(value, () => resolve());
  });
}
