import React from 'react';
import PropTypes from 'prop-types';

import { DONE } from '../__constants__/SCAN_STEPS';
import Step from '../propTypes/Step';
import ToolTipButton from './ToolTipButton';

const ScanControls = ({
  switchMode,
  makeNextStep,
  isAuto,
  step,
}) => (
  <menu className={`controls ${step !== DONE ? '' : 'fade'}`}>
    <ToolTipButton purpose="next-step" onClick={makeNextStep} disabled={isAuto || step === DONE} />
    <ToolTipButton purpose="switch-mode" onClick={switchMode} disabled={step === DONE} />
  </menu>
);

ScanControls.propTypes = {
  switchMode: PropTypes.func,
  makeNextStep: PropTypes.func,
  isAuto: PropTypes.bool,
  step: Step,
};

ScanControls.defaultProps = {
  switchMode: () => null,
  makeNextStep: () => null,
  isAuto: false,
  step: DONE,
};

export default ScanControls;
