import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer() {
  // just gonna leave this blank for now
  // which is the same as `return undefined;`
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));

