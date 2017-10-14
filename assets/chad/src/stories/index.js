import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Chat from '../chat/chat'

storiesOf('Chat', module)
  .add('with text', () => <Chat messages={[]}/>)
