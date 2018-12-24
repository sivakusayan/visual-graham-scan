import React from 'react';
import { render } from 'react-dom';

import InteractiveStageContainer from './containers/InteractiveStageContainer';
import GrahamScanDriverContainer from './containers/GrahamScanDriverContainer';

const App = () => (
  <>
    <InteractiveStageContainer />
    <GrahamScanDriverContainer />
  </>
);

render(<App />, document.getElementById('app'));
