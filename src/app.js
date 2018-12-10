import React, { Component } from 'react';
import { render } from 'react-dom';

import ResponsiveStage from './utils/ResponsiveStage';

class App extends Component {
  render() {
    return (
      <ResponsiveStage />
    );
  }
}

render(<App />, document.getElementById('app'));