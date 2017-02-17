const html = require('choo/html');

const videoInput = require('../components/videoInput');

module.exports = (state, prev, send) => {
  const videoInputDOM = videoInput.bind(this, state, prev, send);

  return html`
    <div>
      ${videoInputDOM()}
    </div>
  `
}
