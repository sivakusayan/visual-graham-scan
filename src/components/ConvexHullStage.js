/**
 * @fileoverview A responsive wrapper around Konva Stage that allows the user
 * to set points on the canvas.
 */

import React, { Component } from 'react';
import uuid from 'uuid';

import ResponsiveStage from './ResponsiveStage';
import PointLayerContainer from '../containers/Layers/PointLayerContainer';
// import AcceptedPointLayerContainer from '../containers/Layers/AcceptedPointLayerContainer';
// import RejectedPointLayerContainer from '../containers/Layers/RejectedPointLayerContainer';
// import LineLayerContainer from '../containers/Layers/LineLayerContainer';
import rescaleCoordinate from '../utils/rescaleCoordinate';

class ConvexHullStage extends Component {
  onClick = (event) => {
    const { addPoint } = this.props;
    const stage = event.target;
    const pointerPosition = stage.getPointerPosition();

    const point = {
      x: rescaleCoordinate(stage, pointerPosition.x),
      y: rescaleCoordinate(stage, pointerPosition.y),
      id: uuid(),
      status: 'NULL',
    };

    addPoint(point);
  }

  render() {
    return (
      <ResponsiveStage
        onClick={this.onClick}
      >
        <PointLayerContainer />
        {/* <AcceptedPointLayerContainer />
        <RejectedPointLayerContainer />
        <LineLayerContainer /> */}
      </ResponsiveStage>
    );
  }
}

export default ConvexHullStage;
