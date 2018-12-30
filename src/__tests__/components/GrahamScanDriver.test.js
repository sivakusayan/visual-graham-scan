import React from 'react';
import { shallow } from 'enzyme';

import GrahamScanDriver from '../../components/GrahamScanDriver';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../../__constants__/SCAN_STEP_DESCRIPTIONS';

describe('GrahamScanDriver Component', () => {
  it(`should render the correct text during scan step ${GET_START_POINT}`, () => {
    const wrapper = shallow(<GrahamScanDriver isActive scanStep={GET_START_POINT} />);
    expect(wrapper.find('.driver__description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[GET_START_POINT]);
  });
  it(`should render the correct text during scan step ${SORT_POINTS}`, () => {
    const wrapper = shallow(<GrahamScanDriver isActive scanStep={SORT_POINTS} />);
    expect(wrapper.find('.driver__description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[SORT_POINTS]);
  });
  it(`should render the correct text during scan step ${ADD_NEXT_POINT}`, () => {
    const wrapper = shallow(<GrahamScanDriver isActive scanStep={ADD_NEXT_POINT} />);
    expect(wrapper.find('.driver__description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[ADD_NEXT_POINT]);
  });
  it(`should render the correct text during scan step ${FIX_RIGHT_TURN}`, () => {
    const wrapper = shallow(<GrahamScanDriver isActive scanStep={FIX_RIGHT_TURN} />);
    expect(wrapper.find('.driver__description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[FIX_RIGHT_TURN]);
  });
  it(`should render the correct text during scan step ${DONE}`, () => {
    const wrapper = shallow(<GrahamScanDriver isActive scanStep={DONE} />);
    expect(wrapper.find('.driver__description').text()).toMatch(SCAN_STEP_DESCRIPTIONS[DONE]);
  });
});
