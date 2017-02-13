const html = require('choo/html');

const footerStyle = `
  background: #a73226;
  width: 100%;
  text-align: center;
`

module.exports = () => {
  return html`
    <footer style=${footerStyle}>
      Created by: Jesse and Tina
    </footer>
  `
}
