/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { DONE } from '../__constants__/SCAN_STEPS';
import Step from '../propTypes/Step';
import ToolTipButton from './ToolTipButton';

const GrahamScanControls = ({
  clearAll,
  play,
  playAuto,
  generatePoints,
  isAuto,
  step,
  isEditable,
}) => (
  <menu className="controls">
    <ToolTipButton purpose="clear-all" onClick={clearAll} disabled={!isEditable} />
    <ToolTipButton purpose="generate-points" onClick={generatePoints} />
    <ToolTipButton purpose="play" onClick={play} disabled={!isAuto && step !== DONE} />
    <ToolTipButton purpose="play-auto" onClick={playAuto} disabled={isAuto && step !== DONE} />
  </menu>
);

GrahamScanControls.propTypes = {
  clearAll: PropTypes.func,
  play: PropTypes.func,
  playAuto: PropTypes.func,
  generatePoints: PropTypes.func,
  isAuto: PropTypes.bool,
  isEditable: PropTypes.bool,
  step: Step,
};

GrahamScanControls.defaultProps = {
  clearAll: () => null,
  play: () => null,
  playAuto: () => null,
  generatePoints: () => null,
  isAuto: false,
  isEditable: false,
  step: DONE,
};

export default GrahamScanControls;
