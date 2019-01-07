import React from 'react';
import { shallow } from 'enzyme';

import { DONE } from '../../__constants__/SCAN_STEPS';
import PreparationControlsContainer from '../../containers/PreparationControlsContainer';

describe('PreparationControls Container', () => {
  it('calling play should start the scan', () => {
    const startScanSpy = jest.fn();
    const deactivateAutoDummy = jest.fn();
    const wrapper = shallow(
      <PreparationControlsContainer
        startScan={startScanSpy}
        deactivateAuto={deactivateAutoDummy}
        step={DONE}
      />,
    ).dive();
    wrapper.prop('play')();

    expect(startScanSpy).toHaveBeenCalled();
  });
  it('calling playAuto should start the scan', () => {
    const startScanSpy = jest.fn();
    const activateAutoDummy = jest.fn();
    const wrapper = shallow(
      <PreparationControlsContainer
        startScan={startScanSpy}
        activateAuto={activateAutoDummy}
        step={DONE}
      />,
    ).dive();

    wrapper.prop('playAuto')();

    expect(startScanSpy).toHaveBeenCalled();
  });
});
