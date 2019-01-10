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
import Driver from '../components/Driver';
import Point from '../propTypes/Point';

class DriverContainer extends Component {
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
  }

  componentDidUpdate(prevProps, prevState) {
    const { nextPointIndex, isAuto } = this.state;
    // We kickstart the auto process here, as makeNextStep can't
    // do that by itself due to how React handles batch state updates.

    // First scenario is if we are starting up a new scan.
    const firstScenario = (nextPointIndex === 0 && isAuto && prevState.step === DONE);
    // Second scenario is if we switch from a manual scan to an auto scan midway
    const secondScenario = isAuto !== prevState.isAuto && isAuto;

    if (firstScenario || secondScenario) {
      setTimeout(this.makeNextStep, 10);
    }
  }

  onKeyDownNextStep = (e) => {
    const { isAuto } = this.state;
    if (e.keyCode === 78 && this.isActive() && !isAuto) {
      this.makeNextStep();
    }
  };

  init = () => {
    this.setState({
      startPoint: null,
      nextPointIndex: 0,
      convexHull: [],
    });
  }

  isActive = () => {
    const { step } = this.state;
    return step !== DONE;
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

    // Get the points that will form our new line
    const prevPoint = nextPointIndex === 0 ? startPoint : points[nextPointIndex - 1];
    const nextPoint = points[nextPointIndex];
    acceptPoint(nextPoint.name);
    addLine(prevPoint, nextPoint);

    // Do this check before setState since setState isn't synchronous
    if (nextPointIndex + 1 === points.length) this.endScan();
    this.setState(prevState => ({
      nextPointIndex: prevState.nextPointIndex + 1,
      convexHull: prevState.convexHull.concat(nextPoint),
    }));
  };

  fixRightTurn = () => {
    const {
      rejectPoint,
      addLine,
      setErrorLine,
    } = this.props;
    const { convexHull } = this.state;

    // Point before errorPoint
    const originPoint = convexHull[convexHull.length - 3];
    // Point where line made a right turn from
    const errorPoint = convexHull[convexHull.length - 2];
    // Point where line made a right turn to
    const endPoint = convexHull[convexHull.length - 1];
    this.setState({ step: FIX_RIGHT_TURN });

    rejectPoint(errorPoint.name);
    // Remove error point from hull
    convexHull.splice(convexHull.length - 2, 1);
    setErrorLine(errorPoint, endPoint);
    setErrorLine(originPoint, errorPoint);
    addLine(originPoint, endPoint);
  };

  makeNextStep = () => {
    const { points, clearErrorLines } = this.props;
    const {
      convexHull,
      isAuto,
      nextPointIndex,
      step,
    } = this.state;
    // Clear any lingering lines from fixRightTurn
    clearErrorLines();

    if (step === GET_START_POINT) this.sortPoints();
    if (step === SORT_POINTS) this.addNextPoint();
    if (step === ADD_NEXT_POINT || step === FIX_RIGHT_TURN) {
      if (convexHull.length >= 3 && hasRightTurn(convexHull)) {
        this.fixRightTurn();
      } else {
        this.addNextPoint();
      }
    }

    // Recursively call itself to run scan automatically
    if (isAuto && nextPointIndex + 1 <= points.length) {
      setTimeout(this.makeNextStep, 10);
    }
  };

  endScan = () => {
    const { activateEdits } = this.props;
    this.setState({ step: DONE });
    activateEdits();
  }

  startScan = () => {
    const { points, deactivateEdits } = this.props;
    // We don't want the user to play scan if there are no points
    if (points.length < 1) return;

    deactivateEdits();
    this.init();
    this.getStartPoint();
  }

  activateAuto = () => this.setState({ isAuto: true })

  deactivateAuto = () => this.setState({ isAuto: false })

  render() {
    const { isAuto, step } = this.state;
    return (
      <Driver
        isAuto={isAuto}
        step={step}
        activateAuto={this.activateAuto}
        deactivateAuto={this.deactivateAuto}
        startScan={this.startScan}
        makeNextStep={this.makeNextStep}
      />
    );
  }
}

DriverContainer.propTypes = {
  points: PropTypes.arrayOf(Point),
  acceptPoint: PropTypes.func,
  rejectPoint: PropTypes.func,
  sortPoints: PropTypes.func,
  addLine: PropTypes.func,
  setErrorLine: PropTypes.func,
  clearErrorLines: PropTypes.func,
  activateEdits: PropTypes.func,
  deactivateEdits: PropTypes.func,
};

DriverContainer.defaultProps = {
  points: [],
  acceptPoint: () => null,
  rejectPoint: () => null,
  sortPoints: () => null,
  addLine: () => null,
  setErrorLine: () => null,
  clearErrorLines: () => null,
  activateEdits: () => null,
  deactivateEdits: () => null,
};

export default DriverContainer;
