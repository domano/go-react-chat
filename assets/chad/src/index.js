import React from 'react';
import { render } from 'react-dom'

import registerServiceWorker from './registerServiceWorker';
import VisibleChat from './containers/visibleChat'
import './components/chat.css'
import chatReducer from './reducers/chat'
import { createStore, applyMiddleware } from 'redux';
import { createWebsocketMiddleware } from './middlewares/websocket'
import { Provider } from 'react-redux';

const mockPeople = [
  {
    name: "Batman",
  },
  {
    name: "Wolverine",
  },
  {
    name: "Muten Roshi",
  },
  {
    name: "Boris Karloff",
  },
  {
    name: "Max Mustermann",
  },
]

const mockRooms = [
  {
    name: "MyTeam A",
  },
  {
    name: "Off-Topic",
  },
  {
    name: "Funny Memes",
  },
  {
    name: "MyTeam B",
  },
  {
    name: "Stuff",
  },
]
let ws = createWebsocketMiddleware()
let store = createStore(chatReducer, applyMiddleware(ws))

const run = () => {
  render(
  <Provider
    store={store}>
    <VisibleChat messages={[]} rooms={mockRooms} selectedRoom={mockRooms[0]} people={mockPeople} />
  </Provider> , document.getElementById('root')
  )
};
store.subscribe(run);
console.log(store)
run()
registerServiceWorker();
