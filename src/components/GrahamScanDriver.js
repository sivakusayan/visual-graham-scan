/**
 * Serves as the component that allows the user to interact
 * with the graham scan algorithm.
 */

import React, { Component } from 'react';

import { DONE } from '../constants/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../constants/SCAN_STEP_DESCRIPTIONS';

const GrahamScanDriver = ({
  startScan,
  isActive,
  scanStep,
  nextMove,
}) => (
  <section>
    {!isActive && (
      <button onClick={startScan} type="button" className="start-scan">
        Start Scan
      </button>
    )}
    {isActive && (
      <>
        <p className="step-description">
          {SCAN_STEP_DESCRIPTIONS[scanStep]}
        </p>
        <button onClick={nextMove} type="button" className="next-move">
          Next Move
        </button>
      </>
    )}
    {(isActive && scanStep === DONE) && (
      <button onClick={nextMove} type="button" className="repeat-scan">
        Repeat Scan
      </button>
    )}
  </section>
)

export default GrahamScanDriver;
