/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { DONE } from '../__constants__/SCAN_STEPS';
import Step from '../propTypes/Step';
import ToolTipButton from './ToolTipButton';

const PreparationControls = ({
  clearAll,
  play,
  playAuto,
  generatePoints,
  step,
}) => (
  <>
    <menu className={`controls ${step !== DONE ? 'fade' : ''}`}>
      <ToolTipButton purpose="play" onClick={play} disabled={step !== DONE} />
      <ToolTipButton purpose="play-auto" onClick={playAuto} disabled={step !== DONE} />
      <ToolTipButton purpose="clear-all" onClick={clearAll} disabled={step !== DONE} />
      <ToolTipButton purpose="generate-points" onClick={generatePoints} disabled={step !== DONE} />
    </menu>
  </>
);

PreparationControls.propTypes = {
  clearAll: PropTypes.func,
  play: PropTypes.func,
  playAuto: PropTypes.func,
  generatePoints: PropTypes.func,
  step: Step,
};

PreparationControls.defaultProps = {
  clearAll: () => null,
  play: () => null,
  playAuto: () => null,
  generatePoints: () => null,
  step: DONE,
};

export default PreparationControls;
