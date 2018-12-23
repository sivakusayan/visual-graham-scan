import {
  startScan,
  stopScan,
} from '../scanIsActiveActions';
import {
  START_SCAN,
  STOP_SCAN,
} from '../../actionTypes/scanIsActiveActionTypes';

describe('ScanIsActive Action Generators', () => {
  it('should create an action to start the scan', () => {
    const action = {
      type: START_SCAN,
    };
    expect(startScan()).toEqual(action);
  });
  it('should create an action to stop the scan', () => {
    const action = {
      type: STOP_SCAN,
    };
    expect(stopScan()).toEqual(action);
  });
});
