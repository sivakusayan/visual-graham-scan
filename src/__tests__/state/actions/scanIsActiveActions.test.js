import {
  activateScan,
  deactivateScan,
} from '../../../state/actions/scanIsActiveActions';
import {
  ACTIVATE_SCAN,
  DEACTIVATE_SCAN,
} from '../../../state/actionTypes/scanIsActiveActionTypes';

describe('ScanIsActive Action Creators', () => {
  it('should create an action to start the scan', () => {
    const action = {
      type: ACTIVATE_SCAN,
    };
    expect(activateScan()).toEqual(action);
  });
  it('should create an action to stop the scan', () => {
    const action = {
      type: DEACTIVATE_SCAN,
    };
    expect(deactivateScan()).toEqual(action);
  });
});
