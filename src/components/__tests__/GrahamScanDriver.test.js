import React from 'react';
import { shallow } from 'enzyme';

import GrahamScanDriver from '../GrahamScanDriver';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../constants/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../../constants/SCAN_STEP_DESCRIPTIONS';

describe('GrahamScanDriver Component', () => {
  it('should render a start-scan button when scan is inactive', () => {
    const wrapper = shallow(<GrahamScanDriver />);
    expect(wrapper.find('button.start-scan').exists()).toBe(true);
  });
  it('should create an action to start the scan when start-scan button is clicked', () => {
    const startScanSpy = jest.fn();
    const wrapper = shallow(<GrahamScanDriver startScan={startScanSpy} />);
    const button = wrapper.find('button.start-scan');
    button.simulate('click');
    expect(startScanSpy).toHaveBeenCalled();
  });
  it('should render a next-move button when scan is active', () => {
    const wrapper = shallow(<GrahamScanDriver isActive />);
    expect(wrapper.find('button.next-move').exists()).toBe(true);
  });
  it('should call nextMove whenever next-move button is clicked', () => {
    const nextMoveSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriver
        nextMove={nextMoveSpy}
        isActive
      />
    );
    const button = wrapper.find('button.next-move');
    button.simulate('click');
    expect(nextMoveSpy).toHaveBeenCalled();
  });
  it('should render a repeat-scan button when scan finishes and is active', () => {
    const wrapper = shallow(<GrahamScanDriver isActive scanStep={DONE} />);
    expect(wrapper.find('button.repeat-scan').exists()).toBe(true);
  });
  it('should NOT render a repeat-scan button when scan finishes and is inactive', () => {
    const wrapper = shallow(<GrahamScanDriver scanStep={DONE} />);
    expect(wrapper.find('button.repeat-scan').exists()).toBe(false);
  });
  describe('Rendered Text Descriptions', () => {
    it(`should render the correct text during scan step ${GET_START_POINT}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={GET_START_POINT} />);
      expect(wrapper.find('.step-description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[GET_START_POINT]);
    });
    it(`should render the correct text during scan step ${SORT_POINTS}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={SORT_POINTS} />);
      expect(wrapper.find('.step-description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[SORT_POINTS]);
    });
    it(`should render the correct text during scan step ${ADD_NEXT_POINT}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={ADD_NEXT_POINT} />);
      expect(wrapper.find('.step-description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[ADD_NEXT_POINT]);
    });
    it(`should render the correct text during scan step ${FIX_RIGHT_TURN}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={FIX_RIGHT_TURN} />);
      expect(wrapper.find('.step-description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[FIX_RIGHT_TURN]);
    });
    it(`should render the correct text during scan step ${DONE}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={DONE} />);
      expect(wrapper.find('.step-description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[DONE]);
    });
  });
});
