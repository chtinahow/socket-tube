const choo = require('choo');
const html = require('choo/html');
const app = choo();

const layout = require('./components/layout');
const user = require('./pages/user');
const socketModel = require('./models/socketModel');

app.model(socketModel);

app.router([
  ['/', layout.bind(this, user)]
]);

const tree = app.start();
document.body.appendChild(tree);
