import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Four from '../src/components/Four';

const root = document.getElementById('root');

render(<App />, root);
render( Four, document.getElementById('four'));

if (module.hot) {
  module.hot.accept();
}