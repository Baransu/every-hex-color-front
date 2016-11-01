import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import connectToSocket from './socket';

connectToSocket('channelName');

render(<App />, document.getElementById('root'));
