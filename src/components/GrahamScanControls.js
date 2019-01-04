/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { DONE } from '../__constants__/SCAN_STEPS';
import ToolTipButton from './ToolTipButton';

const GrahamScanControls = ({ 
  clearPoints, 
  play, 
  playAuto, 
  activateEdits, 
  isAuto, 
  step, 
  isEditable 
}) => (
  <menu className="controls">
    <ToolTipButton purpose="clear-all" onClick={clearPoints} disabled={!isEditable} />
    <ToolTipButton purpose="play" onClick={play} disabled={!isAuto && step !== DONE} />
    <ToolTipButton purpose="play-auto" onClick={playAuto} disabled={isAuto && step !== DONE} />
    <ToolTipButton purpose="edit-canvas" onClick={activateEdits} disabled={isEditable || step !== DONE} />
  </menu>
);

export default GrahamScanControls;
