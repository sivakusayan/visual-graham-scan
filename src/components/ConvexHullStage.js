/**
 * @fileoverview A responsive wrapper around Konva Stage that allows the user
 * to set points on the canvas.
 */

import React, { Component } from 'react';
import uuid from 'uuid';

import ResponsiveStage from './ResponsiveStage';
import PointLayer from './Layers/PointLayer';
import AcceptedPointLayer from './Layers/AcceptedPointLayer';
import RejectedPointLayer from './Layers/RejectedPointLayer';
import LineLayer from './Layers/LineLayer';
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
    };

    addPoint(point);
  }

  render() {
    return (
      <ResponsiveStage
        onClick={this.onClick}
      >
        <PointLayer />
        <AcceptedPointLayer />
        <RejectedPointLayer />
        <LineLayer />
      </ResponsiveStage>
    );
  }
}

export default ConvexHullStage;
