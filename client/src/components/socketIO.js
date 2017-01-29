const html = require('choo/html');
const { actions } = require('../models/socketModel');

module.exports = (state, prev, send) => {
  const onload = () => {
    send(actions.initio);
  }

  return html`
    <div onload=${onload}>
    </div>
  `
}
