const html = require('choo/html');
const { actions } = require('../models/socketModel');

module.exports = (state, prev, send) => {
  const onload = () => {
    send(actions.initAndSubscribe);
  }

  return html`
    <div onload=${onload}>
    </div>
  `
}
