const html = require('choo/html');
const { actions } = require('../models/socketModel');

const inputStyle = `
  display: flex;
`

const buttonStyle = `
  border-radius: 0px 4px 4px 0px;
`

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

  return html`
    <form style=${inputStyle} action="" onsubmit=${onsubmit}>
      <input class="form-control">
      <button class="btn btn-danger" style=${buttonStyle}>
        Send
      </button>
    </form>
  `
}
