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
  isActive,
  scanStep,
}) => (
  <section className="driver">
    {isActive && (
      <p className="driver__description">
        {SCAN_STEP_DESCRIPTIONS[scanStep]}
      </p>
    )}
  </section>
);

GrahamScanDriver.propTypes = {
  isActive: PropTypes.bool,
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
  scanStep: DONE,
};

export default GrahamScanDriver;
