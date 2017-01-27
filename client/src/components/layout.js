const html = require('choo/html');

module.exports = (pageComponent, state, prev, send) => {
  const page = pageComponent.bind(this, state, prev, send);
  return html`
    <div>
      ${page()}
    </div>
  `
}
