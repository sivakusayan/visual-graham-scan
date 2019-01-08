import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
// Normally these libraries work by requiring the scripts
// in the HTML page. However, going into the node_modules
// folder from the HTML page seems ugly, so we just do it
// here.
import focusVisible from 'focus-visible';
import svgxuse from 'svgxuse';

import InteractiveStageContainer from './containers/InteractiveStageContainer';
import ConnectedDriverContainer from './containers/ConnectedDriverContainer';

const App = () => (
  <>
    <InteractiveStageContainer />
    <ConnectedDriverContainer />
  </>
);

render(<App />, document.getElementById('app'));
