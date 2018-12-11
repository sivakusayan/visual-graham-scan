import React, { Component } from 'react';

import ConvexHullStage from './ConvexHullStage';

class GrahamScanVisualizer extends Component {
  state = {
    points: [],
  }

  render() {
    return (
      <ConvexHullStage />
    );
  }
}

export default GrahamScanVisualizer;
