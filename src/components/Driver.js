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
  justStarted,
  deactivateAuto,
  activateAuto,
  startScan,
  makeNextStep,
}) => (
  <section className="driver">
    <p className={`driver__text  ${!isAuto && step === FIX_RIGHT_TURN ? 'error' : ''}`}>
      {justStarted && 'This app gives a visualization of the Graham Scan algorithm to compute Convex Hulls. Add some points to get started!'}
      {!justStarted && SCAN_STEP_DESCRIPTIONS[step]}
    </p>
    <div className="controls-container">
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
    </div>
  </section>
);

Driver.propTypes = {
  step: Step,
  isAuto: PropTypes.bool,
  justStarted: PropTypes.bool,
  deactivateAuto: PropTypes.func,
  activateAuto: PropTypes.func,
  startScan: PropTypes.func,
  makeNextStep: PropTypes.func,
};

Driver.defaultProps = {
  step: DONE,
  justStarted: true,
  isAuto: false,
  deactivateAuto: () => null,
  activateAuto: () => null,
  startScan: () => null,
  makeNextStep: () => null,
};

export default Driver;
