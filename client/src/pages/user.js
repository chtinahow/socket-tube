const html = require('choo/html');

module.exports = (state, prev, send) => {
  return html`
    <div>
      <div>
        <form id="socketForm" action="" onsubmit="onSubmit">
          <input></input><button>Send</button>
        </form>

        <script>
          // attach to the socket.io server on localhost:9021
          var socket = io('http://localhost:9021');

          // override the onsubmit function on the form
          const form = document.getElementById('socketForm');
          form.onsubmit = (event) => {

            // send the input value
            const input = event.target.children[0];
            socket.emit('message', input.value);

            // clear the input value
            input.value = '';

            // prevent the page from reloading (default opperation on form submit)
            event.preventDefault();
          }
        </script>
      </div>
    </div>
  `
}
