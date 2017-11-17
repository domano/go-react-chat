import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Chat from '../chat/chat'
import chatReducer from '../reducers/chat'
import { createStore } from 'redux';



const store = createStore(chatReducer)

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

storiesOf('Chat', module)
  .add('with text', () => <Chat rooms={mockRooms} people={mockPeople} messages={[]}/>)
