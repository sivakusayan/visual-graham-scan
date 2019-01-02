import { ACTIVATE_EDITS, DEACTIVATE_EDITS } from '../actionTypes/isEditableActionTypes';

/**
 * Generates an action to activate Edit mode.
 *
 * @return {{ type: ACTIVATE_EDITS }}
 */
export const activateEdits = () => ({
  type: ACTIVATE_EDITS,
});

/**
 * Generates an action to deactivate Edit mode.
 *
 * @return {{ type: DEACTIVATE_EDITS }}
 */
export const deactivateEdits = () => ({
  type: DEACTIVATE_EDITS,
});
