import { ACTIVATE_AUTO, DEACTIVATE_AUTO } from '../actionTypes/scanIsAutoActionTypes';

/**
 * Generates an action to activate Auto mode.
 *
 * @return {{ type: ACTIVATE_AUTO }}
 */
export const activateAuto = () => ({
  type: ACTIVATE_AUTO,
});

/**
 * Generates an action to deactivate Auto mode.
 *
 * @return {{ type: DEACTIVATE_AUTO }}
 */
export const deactivateAuto = () => ({
  type: DEACTIVATE_AUTO,
});
