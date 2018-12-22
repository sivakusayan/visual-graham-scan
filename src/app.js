import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './state/store/configureStore';
import GrahamScanVisualizer from './components/GrahamScanVisualizer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <GrahamScanVisualizer />
  </Provider>
);

render(<App />, document.getElementById('app'));
