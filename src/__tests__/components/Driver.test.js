import React from 'react';
import { shallow } from 'enzyme';

import Driver from '../../components/Driver';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../../__constants__/SCAN_STEP_DESCRIPTIONS';

describe('Driver Component', () => {
  describe('Driver Text During Scan', () => {
    it(`should render the correct text during step ${GET_START_POINT}`, () => {
      const wrapper = shallow(<Driver justStarted={false} step={GET_START_POINT} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[GET_START_POINT]);
    });
    it(`should render the correct text during step ${SORT_POINTS}`, () => {
      const wrapper = shallow(<Driver justStarted={false} step={SORT_POINTS} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[SORT_POINTS]);
    });
    it(`should render the correct text during step ${ADD_NEXT_POINT}`, () => {
      const wrapper = shallow(<Driver justStarted={false} step={ADD_NEXT_POINT} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[ADD_NEXT_POINT]);
    });
    it(`should render the correct text during step ${FIX_RIGHT_TURN}`, () => {
      const wrapper = shallow(<Driver justStarted={false} step={FIX_RIGHT_TURN} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[FIX_RIGHT_TURN]);
    });
    it(`should render the correct text during step ${DONE}`, () => {
      const wrapper = shallow(<Driver justStarted={false} step={DONE} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[DONE]);
    });
  });
});
