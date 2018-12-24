import {
  ACTIVATE_SCAN,
  DEACTIVATE_SCAN,
} from '../../../state/actionTypes/scanIsActiveActionTypes';
import scanIsActiveReducer from '../../../state/reducers/scanIsActiveReducer';

describe('ScanIsActive Reducer', () => {
  it('should return true if ACTIVATE_SCAN action is received', () => {
    const initialState = false;
    const action = {
      type: ACTIVATE_SCAN,
    };
    expect(scanIsActiveReducer(initialState, action)).toBe(true);
  });
  it('should return false if DEACTIVATE_SCAN action is received', () => {
    const initialState = true;
    const action = {
      type: DEACTIVATE_SCAN,
    };
    expect(scanIsActiveReducer(initialState, action)).toBe(false);
  });
});
