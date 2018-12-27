/**
 * Serves as the component that allows the user to interact
 * with the graham scan algorithm.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../__constants__/SCAN_STEP_DESCRIPTIONS';

const GrahamScanDriver = ({
  startScan,
  isActive,
  scanStep,
  nextStep,
}) => (
  <section>
    {!isActive && (
      <button onClick={startScan} type="button" className="start-scan">
        Start Scan
      </button>
    )}
    {isActive && (
      <p className="step-description">
        {SCAN_STEP_DESCRIPTIONS[scanStep]}
      </p>
    )}
    {(isActive && scanStep !== DONE) && (
      <button onClick={nextStep} type="button" className="next-move">
        Next Move
      </button>
    )}
    {(isActive && scanStep === DONE) && (
      <button onClick={nextStep} type="button" className="repeat-scan">
        Repeat Scan
      </button>
    )}
  </section>
);

GrahamScanDriver.propTypes = {
  isActive: PropTypes.bool,
  startScan: PropTypes.func,
  nextStep: PropTypes.func,
  scanStep: PropTypes.oneOf([
    GET_START_POINT,
    SORT_POINTS,
    ADD_NEXT_POINT,
    FIX_RIGHT_TURN,
    DONE,
  ]),
};

GrahamScanDriver.defaultProps = {
  isActive: false,
  startScan: () => null,
  nextStep: () => null,
  scanStep: DONE,
};

export default GrahamScanDriver;
