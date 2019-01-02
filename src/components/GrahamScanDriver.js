/**
 * @fileoverview Serves as the component that allows the user to interact
 * with the graham scan algorithm. Displays the step that its higher-order
 * connected component is currently calculating.
 */

import React from 'react';
import PropTypes from 'prop-types';

import ToolTipButton from './ToolTipButton';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../__constants__/SCAN_STEP_DESCRIPTIONS';

const GrahamScanDriver = ({
  isActive,
  isAuto,
  scanStep,
  clearPoints,
  isEditable,
  activateEdits,
  play,
  playAuto,
}) => (
  <section className={`driver ${scanStep === FIX_RIGHT_TURN ? 'error' : ''}`}>
    <p className="driver__text">
      {SCAN_STEP_DESCRIPTIONS[scanStep]}
    </p>
    <menu className="driver__btn-container">
      <ToolTipButton purpose="clear-all" onClick={clearPoints} disabled={!isEditable} />
      <ToolTipButton purpose="play" onClick={play} disabled={!isAuto && isActive} />
      <ToolTipButton purpose="play-auto" onClick={playAuto} disabled={isAuto && isActive} />
      <ToolTipButton purpose="edit-canvas" onClick={activateEdits} disabled={isEditable || isActive } />
    </menu>
  </section>
);

GrahamScanDriver.propTypes = {
  isActive: PropTypes.bool,
  isAuto: PropTypes.bool,
  scanStep: PropTypes.oneOf([
    GET_START_POINT,
    SORT_POINTS,
    ADD_NEXT_POINT,
    FIX_RIGHT_TURN,
    DONE,
  ]),
};

GrahamScanDriver.defaultProps = {
  isActive: false,
  isAuto: false,
  scanStep: DONE,
};

export default GrahamScanDriver;
