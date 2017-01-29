const html = require('choo/html');
const { actions } = require('../models/socketModel');

module.exports = (state, prev, send) => {
  return html`
    <div>
      ${state.url}
      VIDEO HERE!
    </div>
  `
}
