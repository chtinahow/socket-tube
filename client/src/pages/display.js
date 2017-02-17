const html = require('choo/html');
const video = require('../components/video');

module.exports = (state, prev, send) => {
  const videoDOM = state.url ? video.bind(this, state, prev, send) : ()=>{};

  return html`
    <div>
      ${videoDOM()}
    </div>
  `
}
