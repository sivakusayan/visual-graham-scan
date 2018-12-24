import React from 'react';
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

const GrahamScanDriverContainer = (props) => {
  const startScan = () => {
    props.activateScan();
    props.setStep.getStartPoint();
  };
  const { isActive, step } = props;
  return (
    <GrahamScanDriver
      startScan={startScan}
      isActive={isActive}
      scanStep={step}
    />
  );
};

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
  step: PropTypes.enum([
    GET_START_POINT,
    SORT_POINTS,
    ADD_NEXT_POINT,
    FIX_RIGHT_TURN,
    DONE,
  ]),
  acceptPoint: PropTypes.func.isRequired,
  rejectPoint: PropTypes.func.isRequired,
  addLine: PropTypes.func.isRequired,
  removeLine: PropTypes.func.isRequired,
  clearLines: PropTypes.func.isRequired,
  activateScan: PropTypes.func.isRequired,
  setStep: PropTypes.shape({
    getStartPoint: PropTypes.func.isRequired,
    sortPoints: PropTypes.func.isRequired,
    addNextPoint: PropTypes.func.isRequired,
    fixRightTurn: PropTypes.func.isRequired,
    done: PropTypes.func.isRequired,
  }).isRequired,
};

GrahamScanDriverContainer.defaultProps = {
  points: [],
  lines: [],
  isActive: false,
  step: DONE,
};

export default connectWithStore(mapStateToProps, mapDispatchToProps)(GrahamScanDriverContainer);
