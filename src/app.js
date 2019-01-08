import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
// Normally this library works by requiring the script
// in the HTML page. However, since the webpage doesn't seem
// to be able to get scripts by going up one level in the folder
// directory, we just import it here so the script runs.
import focusVisible from 'focus-visible';

import InteractiveStageContainer from './containers/InteractiveStageContainer';
import ConnectedDriverContainer from './containers/ConnectedDriverContainer';

const App = () => (
  <>
    <InteractiveStageContainer />
    <ConnectedDriverContainer />
  </>
);

render(<App />, document.getElementById('app'));

var docHeight = document.documentElement.offsetHeight;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetHeight > docHeight) {
      console.log(el);
    }
  }
);
