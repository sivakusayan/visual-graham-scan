import React, { Component } from 'react';
import Konva from 'konva';
import { connect } from 'react-redux';
import uuid from 'uuid';

import {
  addPoint,
  acceptPoint,
  rejectPoint,
  clearPoints,
} from '../state/actions/pointActions';
import getLayer from '../utils/getLayer';
import rescaleCoordinate from '../utils/rescaleCoordinate';
import arraysAreEqual from '../utils/arraysAreEqual';
import POINT_CONFIG from '../constants/POINT_CONFIG';
import ConvexHullStage from '../components/ConvexHullStage';

class ConnectedConvexHullStage extends Component {
  componentWillUpdate(prevProps) {
    const { points } = this.props;
    console.log(this);
    console.log(points);
    console.log(prevProps.points);
    console.log(arraysAreEqual(points, prevProps.points));
    if (!arraysAreEqual(points, prevProps.points)) {
      console.log('hi');
      // if (points === undefined || points.length === 0) {
        
      // }
      this.renderPoint(this.stageRef.getStage(), points[points.length - 1]);
    }
  }

  getStage = () => {

  }

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

  renderPoint = (stage, point) => {
    const pointLayer = getLayer(stage, 'point-layer');

    const renderedPoint = new Konva.Circle({
      x: point.x,
      y: point.y,
      radius: POINT_CONFIG.radius,
      fill: POINT_CONFIG.fill,
      id: point.id,
    });

    pointLayer.add(renderedPoint);
  }

  render() {
    return (
      <ConvexHullStage onClick={this.onClick} />
    );
  }
}

const mapStateToProps = state => ({
  points: state.points,
  lines: state.lines,
});

export default connect(
  mapStateToProps,
  {
    addPoint,
    acceptPoint,
    rejectPoint,
    clearPoints,
  },
)(ConnectedConvexHullStage);
