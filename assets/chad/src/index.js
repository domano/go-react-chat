import React from 'react';
import { render } from 'react-dom'

import registerServiceWorker from './registerServiceWorker';
import ChatContainer from './containers/visibleChat'
import './components/chat.css'
import chatReducer from './reducers/chat'
import { createStore, applyMiddleware } from 'redux';
import {createWebsocketMiddleware} from './middlewares/websocket'
import { Provider } from 'react-redux';



let store = createStore(chatReducer, applyMiddleware(createWebsocketMiddleware))

const mockPeople = [
  {
      name:"Batman",
  },
  {
      name:"Wolverine",
  },
  {
      name:"Muten Roshi",
  },
  {
      name:"Boris Karloff",
  },
  {
      name:"Max Mustermann",
  },
]

const mockRooms = [
  {
      name:"MyTeam A",
  },
  {
      name:"Off-Topic",
  },
  {
      name:"Funny Memes",
  },
  {
      name:"MyTeam B",
  },
  {
      name:"Stuff",
  },
]

render(<Provider store={store}><ChatContainer messages={[]} rooms={mockRooms} people={mockPeople} /></Provider>, document.getElementById('root'));
registerServiceWorker();
