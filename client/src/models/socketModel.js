const socketModel = {
  state: {},
  reducers: {
    initIO: (state, socket) => {
      return Object.assign({},state,{socket});
    },
    displayVideo: (state, url) => {
      return Object.assign({},state,{url});
    }
  },
  effects: {
    initAndSubscribe: (state, data, send, done) => {
      // attach to the socket.io server on localhost:9021
      const socket = io('http://localhost:9021');
      socket.on('display-video', (url) => {
        send('displayVideo', url, done);
        console.log(url);
      });
      send('initIO', socket, done);
    }
  }
};

const actionList = Object.keys(socketModel.reducers).concat(Object.keys(socketModel.effects));
const actions = actionList.reduce((actionObject, action) => {
  const newAction = {};
  newAction[action] = action;
  return Object.assign({}, actionObject, newAction);
}, {});

module.exports = {
  state: socketModel.state,
  reducers: socketModel.reducers,
  effects: socketModel.effects,
  actions: actions
}
