
const Gpio = require('onoff').Gpio;
const { promisify } = require('util');

const LEFTDOORPIN = 2;
const RIGHTDOORPIN = 3;

const leftOuput = new Gpio(LEFTDOORPIN, 'high');
const rightOutput = new Gpio(RIGHTDOORPIN, 'high');

module.exports = {
  async left(ctx) {
    await promisify(leftOuput.write)(Gpio.LOW);
    await wait(500);
    await promisify(leftOuput.write)(Gpio.HIGH);

    ctx.body = 'success!';
  },
  async right(ctx) {
    await promisify(rightOutput.write)(Gpio.LOW);
    await wait(500);
    await promisify(rightOutput.write)(Gpio.HIGH);

    ctx.body = 'success!';
  }
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}
