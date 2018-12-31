import { activateAuto, deactivateAuto } from '../../../state/actions/scanIsAutoActions';
import { ACTIVATE_AUTO, DEACTIVATE_AUTO } from '../../../state/actionTypes/scanIsAutoActionTypes';

describe('ScanIsAuto Action Creators', () => {
  it('should create an action to activate auto mode', () => {
    const expectedAction = {
      type: ACTIVATE_AUTO,
    };
    expect(activateAuto()).toEqual(expectedAction)
  });
  it('should create an action to deactivate auto mode', () => {
    const expectedAction = {
      type: DEACTIVATE_AUTO,
    };
    expect(deactivateAuto()).toEqual(expectedAction)
  });
});
