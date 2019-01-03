/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm. Displays the step that its higher-order
 * connected component is currently calculating.
 */

import React from 'react';
import PropTypes from 'prop-types';

import GrahamScanControlsContainer from '../containers/GrahamScanControlsContainer';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../__constants__/SCAN_STEP_DESCRIPTIONS';

const GrahamScanDriver = props => (
  <section className={`driver ${props.step === FIX_RIGHT_TURN ? 'error' : ''}`}>
    <p className="driver__text">
      {SCAN_STEP_DESCRIPTIONS[props.step]}
    </p>
    <GrahamScanControlsContainer {...props}/>
  </section>
);

GrahamScanDriver.propTypes = {
  step: PropTypes.oneOf([
    GET_START_POINT,
    SORT_POINTS,
    ADD_NEXT_POINT,
    FIX_RIGHT_TURN,
    DONE,
  ]),
};

GrahamScanDriver.defaultProps = {
  step: DONE,
};

export default GrahamScanDriver;
