import React from 'react';
import PropTypes from 'prop-types';

import { DONE } from '../__constants__/SCAN_STEPS';
import Step from '../propTypes/Step';
import ScanControls from '../components/ScanControls';

const ScanControlsContainer = ({
  isAuto,
  activateAuto,
  deactivateAuto,
  makeNextStep,
  step,
}) => {
  const switchMode = () => {
    if (isAuto) {
      deactivateAuto();
    } else {
      activateAuto();
    }
  };

  return (
    <ScanControls
      isAuto={isAuto}
      step={step}
      switchMode={switchMode}
      makeNextStep={makeNextStep}
    />
  );
};

ScanControlsContainer.propTypes = {
  isAuto: PropTypes.bool,
  step: Step,
  activateAuto: PropTypes.func,
  deactivateAuto: PropTypes.func,
  makeNextStep: PropTypes.func,
};

ScanControlsContainer.defaultProps = {
  isAuto: false,
  step: DONE,
  activateAuto: () => null,
  deactivateAuto: () => null,
  makeNextStep: () => null,
};

export default ScanControlsContainer;
