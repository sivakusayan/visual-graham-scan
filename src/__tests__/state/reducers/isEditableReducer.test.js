import {
  ACTIVATE_EDITS,
  DEACTIVATE_EDITS,
} from '../../../state/actionTypes/isEditableActionTypes';
import isEditableReducer from '../../../state/reducers/isEditableReducer';

describe('isEditable Reducer', () => {
  it('should return true if ACTIVATE_EDITS action is received', () => {
    const initialState = false;
    const action = {
      type: ACTIVATE_EDITS,
    };
    expect(isEditableReducer(initialState, action)).toBe(true);
  });
  it('should return false if DEACTIVATE_EDITS action is received', () => {
    const initialState = true;
    const action = {
      type: DEACTIVATE_EDITS,
    };
    expect(isEditableReducer(initialState, action)).toBe(false);
  });
});
