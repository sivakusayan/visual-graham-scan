// Note that the testing of the actual algorithm implementation will not be tested
// here. Rather, we test that the right functions are called and the correct scan
// step changes are made when nextStep is called. See __tests__/algorithm for tests
// on the physical algorithm implementation.

import React from 'react';
import { shallow } from 'enzyme';

import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../__constants__/SCAN_STEPS';
import { GrahamScanDriverContainer } from '../../containers/GrahamScanDriverContainer';

describe('Scan Driver Logic', () => {
  it('should initialize currentPoint to 0', () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    expect(wrapper.state('currentPoint')).toBe(0);
  });
  it('should dispatch an action to clear lines when getStartPoint is called', () => {
    const clearLinesSpy = jest.fn();
    const wrapper = shallow(<GrahamScanDriverContainer clearLines={clearLinesSpy} />);

    wrapper.instance().getStartPoint();
    expect(clearLinesSpy).toHaveBeenCalled();
  });
  it(`should change scan step to ${GET_START_POINT} when getStartPoint is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().getStartPoint();

    expect(wrapper.prop('scanStep')).toBe(GET_START_POINT);
  });
  it(`should change scan step to ${SORT_POINTS} when sortPoints is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().sortPoints();

    expect(wrapper.prop('scanStep')).toBe(SORT_POINTS);
  });
  it(`should change scan step to ${ADD_NEXT_POINT} when addNextPoint is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().addNextPoint();

    expect(wrapper.prop('scanStep')).toBe(ADD_NEXT_POINT);
  });
  it('should increment currentPoint by 1 whenever addNextPoint is called', () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);

    const originalValue = wrapper.state('currentPoint');
    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();
    const newValue = wrapper.state('currentPoint');

    expect(newValue).toBe(originalValue + 2);
  });
  it('should not increment currentPoint out of array bounds when addNextPoint is called', () => {
    const point = {}; // Dummy point to fill points array
    const points = [point, point, point];
    const wrapper = shallow(<GrahamScanDriverContainer points={points} />);

    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();

    expect(wrapper.state('currentPoint')).toBe(2);
  });
  it(`should change scan step to ${DONE} when addNextPoint is called and currentPoint is at array's end`, () => {
    const point = {}; // Dummy point to fill points array
    const points = [point, point, point];
    const wrapper = shallow(<GrahamScanDriverContainer points={points} />);

    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();

    expect(wrapper.state('scanStep')).toBe(DONE);
  });
  it(`should change scan step to ${FIX_RIGHT_TURN} when fixRightTurn is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().fixRightTurn();

    expect(wrapper.prop('scanStep')).toBe(FIX_RIGHT_TURN);
  });
  describe('nextStep function', () => {
    it(`should call sortPoints if current step is ${GET_START_POINT}`);
    it(`should call addNextPoint if current step is ${SORT_POINTS}`);
    it(`should call addNextPoint or fixRightTurn if current step is ${ADD_NEXT_POINT}`);
    it(`should call addNextPoint if current step is ${FIX_RIGHT_TURN}`);
    it(`should call getStartPoint if current step is ${DONE}`);
  });
});
