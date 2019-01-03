import React from 'react';
import { shallow } from 'enzyme';

import { GET_START_POINT, DONE } from '../../__constants__/SCAN_STEPS';
import GrahamScanControlsContainer from '../../containers/GrahamScanControlsContainer';

describe('GrahamScanControls Container', () => {
  it(`calling play should start the scan if step is ${DONE}`, () => {
    const startScanSpy = jest.fn();
    const wrapper = shallow(<GrahamScanControlsContainer startScan={startScanSpy} step={DONE} />).dive();

    wrapper.prop('play')();

    expect(startScanSpy).toHaveBeenCalledTimes(0);
  });
  it(`calling play won't restart the scan while the step isn't ${DONE}`, () => {
    const startScanSpy = jest.fn();
    const wrapper = shallow(<GrahamScanControlsContainer startScan={startScanSpy} step={GET_START_POINT} />).dive();

    wrapper.prop('play')();

    expect(startScanSpy).toHaveBeenCalledTimes(0);
  });
  it(`calling play should start the scan if step is ${DONE}`, () => {
    const startScanSpy = jest.fn();
    const wrapper = shallow(<GrahamScanControlsContainer startScan={startScanSpy} step={DONE} />).dive();

    wrapper.prop('playAuto')();

    expect(startScanSpy).toHaveBeenCalledTimes(0);
  });
  it(`calling playAuto won't restart the scan while the step isn't ${DONE}`, () => {
    const startScanSpy = jest.fn();
    const wrapper = shallow(<GrahamScanControlsContainer startScan={startScanSpy} step={GET_START_POINT} />).dive();

    wrapper.prop('playAuto')();

    expect(startScanSpy).toHaveBeenCalledTimes(0);
  });
});