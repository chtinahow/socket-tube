const html = require('choo/html');
const socketIO = require('./socketIO');
const header = require('../elements/header');
const footer = require('../elements/footer');


module.exports = (pageComponent, state, prev, send) => {
  const page = pageComponent.bind(this, state, prev, send);
  const socket = socketIO.bind(this, state, prev, send);
  return html`
    <div>
      ${header()}
      ${socket()}
      ${page()}
      ${footer()}
    </div>
  `
}
