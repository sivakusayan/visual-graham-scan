import {
  START_SCAN,
  STOP_SCAN,
} from '../../actionTypes/scanIsActiveActionTypes';
import scanIsActiveReducer from '../scanIsActiveReducer';

describe('ScanIsActive Reducer', () => {
  it('should return true if STOP_SCAN action is received', () => {
    const initialState = false;
    const action = {
      type: START_SCAN,
    };
    expect(scanIsActiveReducer(initialState, action)).toBe(true);
  });
  it('should return false if STOP_SCAN action is received', () => {
    const initialState = true;
    const action = {
      type: STOP_SCAN,
    };
    expect(scanIsActiveReducer(initialState, action)).toBe(false);
  });
});
