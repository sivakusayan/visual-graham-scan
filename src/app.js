import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
// Normally this library works by requiring the script
// in the HTML page. However, since the webpage doesn't seem
// to be able to get scripts by going up one level in the folder
// directory, we just import it here so the script runs.
import focusVisible from 'focus-visible';

import InteractiveStageContainer from './containers/InteractiveStageContainer';
import ConnectedGrahamScanDriverContainer from './containers/ConnectedGrahamScanDriverContainer';

const App = () => (
  <>
    <InteractiveStageContainer />
    <ConnectedGrahamScanDriverContainer />
  </>
);

render(<App />, document.getElementById('app'));
