import React from 'react';
import { render } from 'react-dom';

import InteractiveStageContainer from './containers/InteractiveStageContainer';
import GrahamScanDriver from './components/GrahamScanDriver';

const App = () => (
  <>
    <InteractiveStageContainer />
    <GrahamScanDriver />
  </>
);

render(<App />, document.getElementById('app'));
