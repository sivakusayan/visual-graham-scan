import React, { Component } from 'react';
import Konva from 'konva';
import { Layer } from 'react-konva';

import ResponsiveStage from './ResponsiveStage';
import getLayer from '../utils/getLayer';

class ConvexHullStage extends Component {
  onClick = (event) => {
    const stage = event.target;
    const pointLayer = getLayer(stage, 'point-layer');
    const pointerPosition = stage.getPointerPosition();
    
    const point = new Konva.Circle({
      x: pointerPosition.x / stage.attrs.scaleX,
      y: pointerPosition.y / stage.attrs.scaleY,
      fill: 'blue',
      radius: 30,
    });

    pointLayer.add(point).draw();
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
