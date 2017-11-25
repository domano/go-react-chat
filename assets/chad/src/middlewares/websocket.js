export const createWebsocketMiddleware = store => next => action => {
  switch (action.type) {
    case 'CONNECT':
      //Start a new connection to the server
      if (socket != null) {
        socket.close();
      }

      //Attempt to connect (we could send a 'failed' action on error)
      let socket = new WebSocket('ws://' + window.location.hostname + ':12345/chat');
      socket.onmessage = evt => {
        let msg = evt.data.msg
        store.dispatch({
          type: "ADD_MESSAGE",
          msg: msg
        })
      }
      break;

    //The user wants us to disconnect
    case 'DISCONNECT':
      if (socket != null) {
        socket.close();
      }
      socket = null;
      break;

    case 'SEND_MSG':
        socket.send(action.message)
      break;
    default:
      next(action)
      break;
  }

}