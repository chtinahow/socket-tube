const socketModel = {
  state: {},
  reducers: {
    initio: (state) => {
      // attach to the socket.io server on localhost:9021
      const socket = io('http://localhost:9021');
      return Object.assign({},state,{socket});
    }
  },
  effects: {}
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
