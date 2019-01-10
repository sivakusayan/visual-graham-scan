import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
import InteractiveStageContainer from './containers/InteractiveStageContainer';
import ConnectedDriverContainer from './containers/ConnectedDriverContainer';

// Normally these libraries work by requiring the scripts
// in the HTML page. However, going into the node_modules
// folder from the HTML page seems ugly, so we just do it
// here.
require('focus-visible');
require('svgxuse');

const App = () => (
  <>
    <InteractiveStageContainer />
    <ConnectedDriverContainer />
  </>
);

render(<App />, document.getElementById('app'));
