import { activateEdits, deactivateEdits } from '../../../state/actions/isEditableActions';
import { ACTIVATE_EDITS, DEACTIVATE_EDITS } from '../../../state/actionTypes/isEditableActionTypes';

describe('isEditable Action Creators', () => {
  it('should create an action to activate auto mode', () => {
    const expectedAction = {
      type: ACTIVATE_EDITS,
    };
    expect(activateEdits()).toEqual(expectedAction)
  });
  it('should create an action to deactivate auto mode', () => {
    const expectedAction = {
      type: DEACTIVATE_EDITS,
    };
    expect(deactivateEdits()).toEqual(expectedAction)
  });
});
