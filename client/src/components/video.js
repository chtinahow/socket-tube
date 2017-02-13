const html = require('choo/html');
const { actions } = require('../models/socketModel');

module.exports = (state, prev, send) => {

  const firstRegex = /v=(.*)|.*\/([^=]*)$/
  console.log(state.url);
  const urlMatch = state.url.match(firstRegex);
  const urlKey = urlMatch[1] || urlMatch[2];
  const videoUrl = `https://www.youtube.com/embed/${urlKey}`;

  return html`
    <div>
      ${videoUrl}
      <iframe width="854" height="480"
        src="${videoUrl}"
        frameborder="0" allowfullscreen>
      </iframe>
      VIDEO HERE!
    </div>
  `
}
