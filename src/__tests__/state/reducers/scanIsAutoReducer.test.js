import {
  ACTIVATE_AUTO,
  DEACTIVATE_AUTO,
} from '../../../state/actionTypes/scanIsAutoActionTypes';
import scanIsAutoReducer from '../../../state/reducers/scanIsAutoReducer';

describe('ScanIsAuto Reducer', () => {
  it('should return true if ACTIVATE_AUTO action is received', () => {
    const initialState = false;
    const action = {
      type: ACTIVATE_AUTO,
    };
    expect(scanIsAutoReducer(initialState, action)).toBe(true);
  });
  it('should return false if DEACTIVATE_AUTO action is received', () => {
    const initialState = true;
    const action = {
      type: DEACTIVATE_AUTO,
    };
    expect(scanIsAutoReducer(initialState, action)).toBe(false);
  });
});
