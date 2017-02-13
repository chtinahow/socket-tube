const html = require('choo/html');

const headerStyle = `
  background: #a73226;
  padding: 1.5em;
  margin-bottom: 2.5em;
  width: 100%;
  text-align: center;
`

module.exports = () => {
  return html`
    <div style=${headerStyle}>
      <h1>Socket Tube</h1>
    </div>
  `
}
