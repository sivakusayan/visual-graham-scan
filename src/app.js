import React from 'react';
import { render } from 'react-dom';

import GrahamScanVisualizer from './components/GrahamScanVisualizer';

const App = () => (
  <GrahamScanVisualizer />
);

render(<App />, document.getElementById('app'));
