const choo = require('choo');
const html = require('choo/html');
const app = choo();

const layout = require('./components/layout');
const user = require('./pages/user');

app.router([
  ['/', layout.bind(this, user)]
]);

const tree = app.start();
document.body.appendChild(tree);
