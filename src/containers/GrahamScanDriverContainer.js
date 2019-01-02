/**
 * @fileoverview Serves as the component that does computations for the
 * graham scan algorithm.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../__constants__/SCAN_STEPS';
import getStartPoint from '../algorithm/helpers/getStartPoint';
import hasRightTurn from '../algorithm/helpers/hasRightTurn';
import GrahamScanDriver from '../components/GrahamScanDriver';
import Point from '../propTypes/Point';

class GrahamScanDriverContainer extends Component {
  state = {
    // The start point of the algorithm.
    startPoint: null,
    // Tracks the index of the current point we are
    // processing in the points array.
    nextPointIndex: 0,
    // The points currently on the convex hull
    convexHull: [],
    // Whether the scan should run automaticallly or not
    isAuto: false,
    // The current step we are at in the scan
    step: DONE,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDownNextStep);
  };

  onKeyDownNextStep = e => {
    const { isActive } = this.props;
    const { isAuto } = this.state;
    if (e.keyCode === 32 && isActive && !isAuto) {
      this.nextStep();
    };
  };

  init = () => {
    this.setState({
      startPoint: null,
      nextPointIndex: 0,
      convexHull: [],
    });
  }

  getStartPoint = () => {
    const {
      points,
      acceptPoint,
    } = this.props;
    // Note that this getStartPoint is different from the
    // class method. This function actually computes the
    // startPoint.
    const startPoint = getStartPoint(points);
    this.setState(prevState => ({ 
      startPoint,
      convexHull: prevState.convexHull.concat(startPoint),
      step: GET_START_POINT,
    }));
    acceptPoint(startPoint.name);
  };

  sortPoints = () => {
    const { sortPoints } = this.props;
    const { startPoint } = this.state;
    this.setState({ step: SORT_POINTS });
    sortPoints(startPoint);
  };

  addNextPoint = () => {
    const {
      acceptPoint,
      addLine,
      points,
    } = this.props;
    const { nextPointIndex, startPoint } = this.state;
    this.setState({ step: ADD_NEXT_POINT });

    const prevPoint = nextPointIndex === 0 ? startPoint : points[nextPointIndex - 1];
    const nextPoint = points[nextPointIndex];
    acceptPoint(nextPoint.name);
    addLine(prevPoint, nextPoint);

    // Do this check before setState since setState isn't synchronous
    if (nextPointIndex + 1 === points.length) {
      const { deactivateScan } = this.props;
      this.setState({ step: DONE })
      deactivateScan();
    }
    this.setState(prevState => ({
      nextPointIndex: prevState.nextPointIndex + 1,
      convexHull: prevState.convexHull.concat(nextPoint),
    }));
  };

  fixRightTurn = () => {
    const {
      rejectPoint,
      addLine,
      removeLine,
    } = this.props;
    const { convexHull } = this.state;
    // Point before errorPoint
    const originPoint = convexHull[convexHull.length - 3];
    // Point where line made a right turn from
    const errorPoint = convexHull[convexHull.length - 2];
    // Point where line made a right turn to
    const endPoint = convexHull[convexHull.length - 1];
    this.setState({ step: FIX_RIGHT_TURN })

    rejectPoint(errorPoint.name);
    convexHull.splice(convexHull.length - 2, 1);
    removeLine(errorPoint, endPoint);
    removeLine(originPoint, errorPoint);
    addLine(originPoint, endPoint);
  };

  nextStep = () => {
    const { points } = this.props;
    const { convexHull, isAuto, nextPointIndex, step } = this.state;
    if (step === GET_START_POINT) this.sortPoints();
    if (step === SORT_POINTS) this.addNextPoint();
    if (step === ADD_NEXT_POINT || step === FIX_RIGHT_TURN) {
      if (convexHull.length >= 3 && hasRightTurn(convexHull)) {
        this.fixRightTurn();
      } else {
        this.addNextPoint();
      }
    }

    if (isAuto && nextPointIndex + 1 <= points.length) {
      setTimeout(this.nextStep, 100);
    }
  };

  resetCanvas =  () => {
    const { resetPoints, clearLines } = this.props;
    clearLines();
    resetPoints();
  }

  startScan = () => {
    const { activateScan } = this.props;
    this.resetCanvas();
    activateScan();
    this.init();
    this.getStartPoint();
  }

  play = () => {
    const { points, isActive, deactivateEdits } = this.props;
    if (points.length < 1) return;
    deactivateEdits();
    this.setState({ isAuto: false });
    if (!isActive) this.startScan();
  }

  playAuto = () => {
    const { points, isActive, deactivateEdits } = this.props;
    if (points.length < 1) return;
    deactivateEdits();
    this.setState({ isAuto: true })
    if (!isActive) {
      this.startScan();
    }
    // KickStart auto process
    setTimeout(this.nextStep, 100);
  }

  activateEdits = () => {
    const { activateEdits } = this.props;
    // Reset results of scan
    this.resetCanvas();
    // Set redux state isEditable to true
    activateEdits();
  }

  render() {
    const { isActive, clearPoints, isEditable } = this.props;
    const { isAuto, step } = this.state;
    return (
      <GrahamScanDriver
        isActive={isActive}
        isAuto={isAuto}
        step={step}
        nextStep={this.nextStep}
        clearPoints={clearPoints}
        isEditable={isEditable}
        activateEdits={this.activateEdits}
        play={this.play}
        playAuto={this.playAuto}
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
  addLine: PropTypes.func,
  removeLine: PropTypes.func,
  deactivateScan: PropTypes.func,
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
  addLine: () => null,
  removeLine: () => null,
  deactivateScan: () => null,
  setGetStartPoint: () => null,
  setSortPoints: () => null,
  setAddNextPoint: () => null,
  setFixRightTurn: () => null,
  setDone: () => null,
};

export default GrahamScanDriverContainer;
