// Note that there is a distinction to be made between the
// action creators that change the scanStep state
// (ex: setStep.getStartPoint, setStep.addNextPoint) and the
// component methods (ex: getStartPoint and addNextPoint). The latter
// will actually do necessary computations, while the former is
// for the sake of UI changes.

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
import sortPoints from '../algorithm/helpers/sortPoints';
import GrahamScanDriver from '../components/GrahamScanDriver';
import Point from '../propTypes/Point';
import Line from '../propTypes/Line';

class GrahamScanDriverContainer extends Component {
  state = {
    startPoint: null,
  }

  startScan = () => {
    const { activateScan } = this.props;
    activateScan();
    this.getStartPoint();
  };

  getStartPoint = () => {
    const { points, acceptPoint, setStep } = this.props;
    setStep.getStartPoint();
    const startPoint = getStartPoint(points);
    this.setState({ startPoint });
    acceptPoint(startPoint.name);
  };

  sortPoints = () => {
    const { points, setStep } = this.props;
    const { startPoint } = this.state;
    setStep.sortPoints(startPoint, points);
    sortPoints();
  };

  render() {
    const { isActive, step } = this.props;
    return (
      <GrahamScanDriver
        startScan={this.startScan}
        isActive={isActive}
        scanStep={step}
      />
    );
  }
}

GrahamScanDriverContainer.propTypes = {
  points: PropTypes.arrayOf(Point),
  lines: PropTypes.arrayOf(Line),
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
  addLine: PropTypes.func,
  removeLine: PropTypes.func,
  clearLines: PropTypes.func,
  activateScan: PropTypes.func,
  setStep: PropTypes.shape({
    getStartPoint: PropTypes.func,
    sortPoints: PropTypes.func,
    addNextPoint: PropTypes.func,
    fixRightTurn: PropTypes.func,
    done: PropTypes.func,
  }),
};

GrahamScanDriverContainer.defaultProps = {
  points: [],
  lines: [],
  isActive: false,
  step: DONE,
  acceptPoint: () => null,
  rejectPoint: () => null,
  addLine: () => null,
  removeLine: () => null,
  clearLines: () => null,
  activateScan: () => null,
  setStep: PropTypes.shape({
    getStartPoint: () => null,
    sortPoints: () => null,
    addNextPoint: () => null,
    fixRightTurn: () => null,
    done: () => null,
  }),
};

export default GrahamScanDriverContainer;
