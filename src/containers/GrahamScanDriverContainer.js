import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../__constants__/SCAN_STEPS';
import { ACCEPTED } from '../__constants__/POINT_STATUSES';
import getStartPoint from '../algorithm/helpers/getStartPoint';
import hasRightTurn from '../algorithm/helpers/hasRightTurn';
import GrahamScanDriver from '../components/GrahamScanDriver';
import Point from '../propTypes/Point';
import Line from '../propTypes/Line';

class GrahamScanDriverContainer extends Component {
  state = {
    // The start point of the algorithm.
    startPoint: null,
    // Tracks the index of the current point we are
    // processing in the points array.
    nextPointIndex: 0,
    // The points currently on the convex hull
    convexHull: [],
  }

  init = () => {
    const { resetPoints } = this.props;
    resetPoints();
    this.setState({
      startPoint: null,
      nextPointIndex: 0,
      convexHull: [],
    });
  }

  startScan = () => {
    const { activateScan, points } = this.props;
    if (points.length > 0) {
      activateScan();
      this.getStartPoint();
    }
  };

  getStartPoint = () => {
    const {
      points,
      acceptPoint,
      setGetStartPoint,
      clearLines,
    } = this.props;
    clearLines();
    setGetStartPoint();
    // Note that this getStartPoint is different from the
    // class method. This function actually computes the
    // startPoint.
    const startPoint = getStartPoint(points);
    this.setState(prevState => ({ 
      startPoint,
      convexHull: prevState.convexHull.concat(startPoint),
    }));
    acceptPoint(startPoint.name);
  };

  sortPoints = () => {
    const { setSortPoints, sortPoints } = this.props;
    const { startPoint } = this.state;
    setSortPoints();
    sortPoints(startPoint);
  };

  addNextPoint = () => {
    const {
      acceptPoint,
      setAddNextPoint,
      setDone,
      addLine,
      points,
    } = this.props;
    const { nextPointIndex, startPoint } = this.state;
    setAddNextPoint();

    const prevPoint = nextPointIndex === 0 ? startPoint : points[nextPointIndex - 1];
    const nextPoint = points[nextPointIndex];
    acceptPoint(nextPoint.name);
    addLine(prevPoint, nextPoint);

    // Do this check before setState since setState isn't synchronous
    if (nextPointIndex + 1 === points.length) setDone();
    this.setState(prevState => ({
      nextPointIndex: prevState.nextPointIndex + 1,
      convexHull: prevState.convexHull.concat(nextPoint),
    }));
  }

  fixRightTurn = () => {
    const {
      points,
      rejectPoint,
      setFixRightTurn,
      addLine,
      removeLine,
    } = this.props;
    const { startPoint, nextPointIndex, convexHull } = this.state;
    // Point before errorPoint
    const originPoint = convexHull[convexHull.length - 3];
    // Point where line made a right turn from
    const errorPoint = convexHull[convexHull.length - 2];
    // Point where line made a right turn to
    const endPoint = convexHull[convexHull.length - 1];
    setFixRightTurn();

    rejectPoint(errorPoint.name);
    convexHull.splice(convexHull.length - 2, 1);
    removeLine(errorPoint, endPoint);
    removeLine(originPoint, errorPoint);
    addLine(originPoint, endPoint);
  }

  nextStep = () => {
    const { step } = this.props;
    const { convexHull } = this.state;
    if (step === DONE) {
      this.init();
      this.getStartPoint();
    }
    if (step === GET_START_POINT) this.sortPoints();
    if (step === SORT_POINTS) this.addNextPoint();
    if (step === ADD_NEXT_POINT || step === FIX_RIGHT_TURN) {
      if (convexHull.length >= 3 && hasRightTurn(convexHull)) {
        this.fixRightTurn();
      } else {
        this.addNextPoint();
      }
    }
  }

  render() {
    const { isActive, step } = this.props;
    return (
      <GrahamScanDriver
        startScan={this.startScan}
        isActive={isActive}
        scanStep={step}
        nextStep={this.nextStep}
      />
    );
  }
}

GrahamScanDriverContainer.propTypes = {
  points: PropTypes.arrayOf(Point),
  isActive: PropTypes.bool,
  step: PropTypes.oneOf([
    GET_START_POINT,
    SORT_POINTS,
    ADD_NEXT_POINT,
    FIX_RIGHT_TURN,
    DONE,
  ]),
  acceptPoint: PropTypes.func,
  rejectPoint: PropTypes.func,
  sortPoints: PropTypes.func,
  resetPoints: PropTypes.func,
  addLine: PropTypes.func,
  removeLine: PropTypes.func,
  clearLines: PropTypes.func,
  activateScan: PropTypes.func,
  setGetStartPoint: PropTypes.func,
  setSortPoints: PropTypes.func,
  setAddNextPoint: PropTypes.func,
  setFixRightTurn: PropTypes.func,
  setDone: PropTypes.func,
};

GrahamScanDriverContainer.defaultProps = {
  points: [],
  isActive: false,
  step: DONE,
  acceptPoint: () => null,
  rejectPoint: () => null,
  sortPoints: () => null,
  resetPoints: () => null,
  addLine: () => null,
  removeLine: () => null,
  clearLines: () => null,
  activateScan: () => null,
  setGetStartPoint: () => null,
  setSortPoints: () => null,
  setAddNextPoint: () => null,
  setFixRightTurn: () => null,
  setDone: () => null,
};

export default GrahamScanDriverContainer;
