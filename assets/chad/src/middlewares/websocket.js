export const createWebsocketMiddleware = (socket = null) => store => next => action => {
  switch (action.type) {
    case 'CONNECT':
      //Start a new connection to the server
      console.log("Connecting")
      if (socket != null) {
        socket.close();
      }

      //Attempt to connect (we could send a 'failed' action on error)
      socket = new WebSocket('ws://' + window.location.hostname + ':12345/chat');
      socket.onmessage = evt => {
        let data = JSON.parse(evt.data)
        store.dispatch({
          type: "ADD_MESSAGE",
          msg: data
        })
      }
      socket.onerror = evt => {
        console.log('######## #######'+JSON.stringify(evt))
      }
      socket.onopen = evt => {
        console.log('Success!')
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
        socket.send(JSON.stringify(action.msg))
      break;
    default:
      next(action)
      break;
  }

}