const html = require('choo/html');
const socketIO = require('./socketIO');
const header = require('../elements/header');
const footer = require('../elements/footer');

const layoutStyle = `
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const pageStyle = `
  height: 100%;
`

module.exports = (pageComponent, state, prev, send) => {
  const page = pageComponent.bind(this, state, prev, send);
  const socket = socketIO.bind(this, state, prev, send);
  return html`
    <div style=${layoutStyle}>
      ${header()}
      ${socket()}
      <div style=${pageStyle}>
        ${page()}
      </div>
      ${footer()}
    </div>
  `
}
