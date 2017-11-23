export const createWebsocketMiddleware = connection => store => next => action => {
  if (action.type === 'SEND_MSG') {
    connection.send(action.message)
  }
  return next(action)
}


export const newConnection = (store) => {
  // this is an broadcasting echo websocket service for testing pusposes
  let connection = new WebSocket('ws://' + window.location.hostname + ':12345/chat');
  // listen to onmessage event
  connection.onmessage = evt => {
    let msg = evt.data.msg
    store.dispatch({
      type: "ADD_MESSAGE",
      msg: msg
    })
  }
}