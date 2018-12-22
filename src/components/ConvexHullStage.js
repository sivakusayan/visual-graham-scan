import React, { Component } from 'react';
import Konva from 'konva';
import { Layer } from 'react-konva';

import ResponsiveStage from './ResponsiveStage';
import getLayer from '../utils/getLayer';
import rescaleCoordinate from '../utils/rescaleCoordinate';

class ConvexHullStage extends Component {
  onClick = (event) => {
    console.log(event);
    const stage = event.target;
    const pointLayer = getLayer(stage, 'point-layer');
    const pointerPosition = stage.getPointerPosition();

    const point = new Konva.Circle({
      x: rescaleCoordinate(stage, pointerPosition.x),
      y: rescaleCoordinate(stage, pointerPosition.y),
      fill: 'blue',
      radius: 30,
    });

    if (pointLayer.children[0]) {
      pointLayer.children[0].fill('green');
    }

    pointLayer.add(point).draw();
    console.log(pointLayer);
  }

  render() {
    return (
      <ResponsiveStage
        onClick={this.onClick}
      >
        <Layer className="point-layer" />
        <Layer className="line-layer" />
      </ResponsiveStage>
    );
  }
}

export default ConvexHullStage;
