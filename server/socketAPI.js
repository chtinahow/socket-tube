const io = require('socket.io')();
const chalk = require('chalk');

const port = '9021';

io.on('connection', socket => {
  console.log(chalk.blue('user connected'));

  socket.on('push-video', url => {
    console.log(chalk.yellow(`url: ${url}`));
    io.emit('display-video', url);
  });

  socket.on('disconnect', () => {
    console.log(chalk.red('user disconnected'));
  });
});


io.listen(port);
console.log(chalk.bold.yellow(`Listening on port ${port}`));
