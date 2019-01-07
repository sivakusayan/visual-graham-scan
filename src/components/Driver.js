/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm. Displays the step that its higher-order
 * connected component is currently calculating.
 */

import React from 'react';
import PropTypes from 'prop-types';

import PreparationControlsContainer from '../containers/PreparationControlsContainer';
import ScanControlsContainer from '../containers/ScanControlsContainer';
import { FIX_RIGHT_TURN, DONE } from '../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../__constants__/SCAN_STEP_DESCRIPTIONS';
import Step from '../propTypes/Step';

const Driver = ({
  step,
  isAuto,
  deactivateAuto,
  activateAuto,
  startScan,
  makeNextStep,
}) => (
  <section className="driver">
    <p className={`driver__text  ${step === FIX_RIGHT_TURN ? 'error' : ''}`}>
      {SCAN_STEP_DESCRIPTIONS[step]}
      <span className="driver__directions">Press 'N' on your keyboard for the next move.</span>
    </p>
    <PreparationControlsContainer
      step={step}
      isAuto={isAuto}
      deactivateAuto={deactivateAuto}
      activateAuto={activateAuto}
      startScan={startScan}
    />
    <ScanControlsContainer
      step={step}
      isAuto={isAuto}
      deactivateAuto={deactivateAuto}
      activateAuto={activateAuto}
      makeNextStep={makeNextStep}
    />
  </section>
);

Driver.propTypes = {
  step: Step,
  isAuto: PropTypes.bool,
  deactivateAuto: PropTypes.func,
  activateAuto: PropTypes.func,
  startScan: PropTypes.func,
  makeNextStep: PropTypes.func,
};

Driver.defaultProps = {
  step: DONE,
  isAuto: false,
  deactivateAuto: () => null,
  activateAuto: () => null,
  startScan: () => null,
  makeNextStep: () => null,
};

export default Driver;
