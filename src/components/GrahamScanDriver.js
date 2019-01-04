/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm. Displays the step that its higher-order
 * connected component is currently calculating.
 */

import React from 'react';

import GrahamScanControlsContainer from '../containers/GrahamScanControlsContainer';
import { FIX_RIGHT_TURN, DONE } from '../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../__constants__/SCAN_STEP_DESCRIPTIONS';
import Step from '../propTypes/Step';

const GrahamScanDriver = props => (
  <section className="driver">
    <p className={`driver__text  ${props.step === FIX_RIGHT_TURN ? 'error' : ''}`}>
      {SCAN_STEP_DESCRIPTIONS[props.step]}
    </p>
    <GrahamScanControlsContainer {...props} />
  </section>
);

GrahamScanDriver.propTypes = {
  step: Step,
};

GrahamScanDriver.defaultProps = {
  step: DONE,
};

export default GrahamScanDriver;
