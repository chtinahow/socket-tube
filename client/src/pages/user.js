const html = require('choo/html');

const videoInput = require('../components/videoInput');
const video = require('../components/video');

module.exports = (state, prev, send) => {
  const videoInputDOM = videoInput.bind(this, state, prev, send);
  const videoDOM = state.url ? video.bind(this, state, prev, send) : ()=>{};

  return html`
    <div>
      ${videoInputDOM()}
      ${videoDOM()}
    </div>
  `
}
