import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';

const App = () => (
  <Provider>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));

