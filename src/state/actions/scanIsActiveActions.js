import {
  ACTIVATE_SCAN,
  DEACTIVATE_SCAN,
} from '../actionTypes/scanIsActiveActionTypes';

/**
 * Generates an action to start the Graham Scan.
 *
 * @returns {{ type: ACTIVATE_SCAN }}
 */
export const activateScan = () => ({
  type: ACTIVATE_SCAN,
});

/**
 * Generates an action to stop the Graham Scan.
 *
 * @returns {{ type: DEACTIVATE_SCAN }}
 */
export const deactivateScan = () => ({
  type: DEACTIVATE_SCAN,
});
