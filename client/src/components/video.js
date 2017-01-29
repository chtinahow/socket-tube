const html = require('choo/html');

module.exports = (state, prev, send) => {

  if (state.socket) {
    state.socket.on('display-video', (url) => {
      console.log(url);
    });
  }

  return html`
    <div>
      VIDEO HERE!
    </div>
  `
}
