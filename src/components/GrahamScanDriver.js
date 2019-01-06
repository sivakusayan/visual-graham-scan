/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm. Displays the step that its higher-order
 * connected component is currently calculating.
 */

import React from 'react';
import PropTypes from 'prop-types';

import GrahamScanControlsContainer from '../containers/GrahamScanControlsContainer';
import { FIX_RIGHT_TURN, DONE } from '../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../__constants__/SCAN_STEP_DESCRIPTIONS';
import Step from '../propTypes/Step';

const GrahamScanDriver = ({
  step,
  deactivateAuto,
  activateAuto,
  startScan,
}) => (
  <section className="driver">
    <p className={`driver__text  ${step === FIX_RIGHT_TURN ? 'error' : ''}`}>
      {SCAN_STEP_DESCRIPTIONS[step]}
      <span className="driver__directions">Press 'N' on your keyboard for the next move.</span>
    </p>
    <GrahamScanControlsContainer
      step={step}
      deactivateAuto={deactivateAuto}
      activateAuto={activateAuto}
      startScan={startScan}
    />
  </section>
);

GrahamScanDriver.propTypes = {
  step: Step,
  deactivateAuto: PropTypes.func,
  activateAuto: PropTypes.func,
  startScan: PropTypes.func,
};

GrahamScanDriver.defaultProps = {
  step: DONE,
  deactivateAuto: () => null,
  activateAuto: () => null,
  startScan: () => null,
};

export default GrahamScanDriver;
