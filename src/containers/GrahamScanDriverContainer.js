import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../__constants__/SCAN_STEPS';
import { acceptPoint, rejectPoint } from '../state/actions/pointActions';
import { addLine, removeLine, clearLines } from '../state/actions/lineActions';
import * as setStep from '../state/actions/scanStepActions';
import { activateScan } from '../state/actions/scanIsActiveActions';
import connectWithStore from '../state/store/connectWithStore';
import GrahamScanDriver from '../components/GrahamScanDriver';
import Point from '../propTypes/Point';
import Line from '../propTypes/Line';

export class GrahamScanDriverContainer extends Component {

  startScan = () => {
    this.props.activateScan();
    this.props.setStep.getStartPoint();
  };


  render() {
    return (
      <GrahamScanDriver
        startScan={this.startScan}
        isActive={this.props.isActive}
        scanStep={this.props.step}
      />
    );
  }
}

const mapStateToProps = state => ({
  points: state.points,
  lines: state.lines,
  isActive: state.scanIsActive,
  step: state.scanStep,
});

const mapDispatchToProps = dispatch => ({
  acceptPoint: name => dispatch(acceptPoint(name)),
  rejectPoint: name => dispatch(rejectPoint(name)),
  addLine: (startPoint, endPoint) => dispatch(addLine(startPoint, endPoint)),
  removeLine: name => dispatch(removeLine(name)),
  clearLines: () => dispatch(clearLines()),
  activateScan: () => dispatch(activateScan()),
  setStep: {
    getStartPoint: () => dispatch(setStep.getStartPoint()),
    sortPoints: () => dispatch(setStep.sortPoints()),
    addNextPoint: () => dispatch(setStep.addNextPoint()),
    fixRightTurn: () => dispatch(setStep.fixRightTurn()),
    done: () => dispatch(setStep.done()),
  },
});

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

export default connectWithStore(mapStateToProps, mapDispatchToProps)(GrahamScanDriverContainer);
