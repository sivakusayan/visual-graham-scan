import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';

import InteractiveStageContainer from './containers/InteractiveStageContainer';
import ConnectedGrahamScanDriverContainer from './containers/ConnectedGrahamScanDriverContainer';

const App = () => (
  <>
    <InteractiveStageContainer />
    <ConnectedGrahamScanDriverContainer />
  </>
);

render(<App />, document.getElementById('app'));
