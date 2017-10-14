import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './chat/chat'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Chat messages={[]}/>, document.getElementById('root'));
registerServiceWorker();
