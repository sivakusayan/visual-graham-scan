/**
 * @fileoverview A responsive wrapper around Konva Stage that allows the user
 * to set points on the canvas.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import ResponsiveStage from './ResponsiveStage';
import PointLayerContainer from '../containers/Layers/PointLayerContainer';
import LineLayerContainer from '../containers/Layers/LineLayerContainer';
import rescaleCoordinate from '../utils/rescaleCoordinate';

class ConvexHullStage extends Component {
  onClick = (event) => {
    const { addPoint } = this.props;
    const stage = event.target;
    const pointerPosition = stage.getPointerPosition();

    const point = {
      x: rescaleCoordinate(stage, pointerPosition.x),
      y: rescaleCoordinate(stage, pointerPosition.y),
      name: uuid(),
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
        <LineLayerContainer />
      </ResponsiveStage>
    );
  }
}

ConvexHullStage.propTypes = {
  addPoint: PropTypes.func.isRequired,
};

export default ConvexHullStage;
