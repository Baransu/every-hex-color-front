import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
