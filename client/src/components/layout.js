const html = require('choo/html');
const socketIO = require('./socketIO');

module.exports = (pageComponent, state, prev, send) => {
  const page = pageComponent.bind(this, state, prev, send);
  const socket = socketIO.bind(this, state, prev, send);
  return html`
    <div>
      ${socket()}
      ${page()}
    </div>
  `
}
