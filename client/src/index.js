const choo = require('choo');
const html = require('choo/html');
const app = choo();

const layout = require('./components/layout');
const user = require('./pages/user');
const display = require('./pages/display');
const socketModel = require('./models/socketModel');

app.model(socketModel);

app.router([
  ['/', layout.bind(this, user)],
  ['/display', layout.bind(this, display)]
]);

const tree = app.start();
document.body.appendChild(tree);
