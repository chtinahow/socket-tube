const html = require('choo/html');

const video = require('../components/video');

module.exports = (state, prev, send) => {
  // override the onsubmit function on the form
  const onsubmit = (event) => {

    // send the input value
    const input = event.target.children[0];
    state.socket.emit('push-video', input.value);

    // clear the input value
    input.value = '';

    // prevent the page from reloading (default opperation on form submit)
    event.preventDefault();
  }

  const videoDOM = video.bind(this, state, prev, send);

  return html`
    <div>
      <form id="socketForm" action="" onsubmit=${onsubmit}>
        <input><button>Send</button>
      </form>
      ${videoDOM()}
    </div>
  `
}
