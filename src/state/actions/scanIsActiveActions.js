import {
  START_SCAN,
  STOP_SCAN,
} from '../actionTypes/scanIsActiveActionTypes';

/**
 * Generates an action to start the Graham Scan.
 *
 * @returns {{ type: START_SCAN }}
 */
export const startScan = () => ({
  type: START_SCAN,
});

/**
 * Generates an action to stop the Graham Scan.
 *
 * @returns {{ type: STOP_SCAN }}
 */
export const stopScan = () => ({
  type: STOP_SCAN,
});
