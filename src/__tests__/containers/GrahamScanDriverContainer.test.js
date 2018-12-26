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
import { NULL, ACCEPTED } from '../../__constants__/POINT_STATUSES';
import GrahamScanDriverContainer from '../../containers/GrahamScanDriverContainer';

describe('Scan Driver Logic', () => {
  it('should initialize currentPoint to 0', () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    expect(wrapper.state('currentPoint')).toBe(0);
  });
  it('should initialize the startPoint to an empty object', () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    expect(wrapper.state('startPoint')).toEqual({});
  });
  it('should dispatch an action to clear lines when getStartPoint is called', () => {
    const clearLinesSpy = jest.fn();
    const wrapper = shallow(<GrahamScanDriverContainer clearLines={clearLinesSpy} />);

    wrapper.instance().getStartPoint();
    expect(clearLinesSpy).toHaveBeenCalled();
  });
  it(`should change step to ${GET_START_POINT} when getStartPoint is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().getStartPoint();

    expect(wrapper.prop('step')).toBe(GET_START_POINT);
  });
  it(`should change step to ${SORT_POINTS} when sortPoints is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().sortPoints();

    expect(wrapper.prop('step')).toBe(SORT_POINTS);
  });
  it(`should change step to ${ADD_NEXT_POINT} when addNextPoint is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().addNextPoint();

    expect(wrapper.prop('step')).toBe(ADD_NEXT_POINT);
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
  it(`should change step to ${DONE} when addNextPoint is called and currentPoint is at array's end`, () => {
    const point = {}; // Dummy point to fill points array
    const points = [point, point, point];
    const wrapper = shallow(<GrahamScanDriverContainer points={points} />);

    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();

    expect(wrapper.state('step')).toBe(DONE);
  });
  it(`should change step to ${FIX_RIGHT_TURN} when fixRightTurn is called`, () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    wrapper.instance().fixRightTurn();

    expect(wrapper.prop('step')).toBe(FIX_RIGHT_TURN);
  });
  describe('nextStep function', () => {
    it(`should call sortPoints if current step is ${GET_START_POINT}`, () => {
      const sortPointsSpy = jest.spyOn(GrahamScanDriverContainer.prototype, 'sortPoints');
      const wrapper = shallow(<GrahamScanDriverContainer step={GET_START_POINT} />);
      wrapper.instance().nextStep();

      expect(sortPointsSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${SORT_POINTS}`, () => {
      const addNextPointSpy = jest.spyOn(GrahamScanDriverContainer.prototype, 'addNextPoint');
      const wrapper = shallow(<GrahamScanDriverContainer step={SORT_POINTS} />);
      wrapper.instance().nextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${ADD_NEXT_POINT} and there is no right turn`, () => {
      const addNextPointSpy = jest.spyOn(GrahamScanDriverContainer.prototype, 'addNextPoint');
      const points = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: 1, status: ACCEPTED },
        { x: 1, y: 2, status: NULL },
      ];
      const wrapper = shallow(<GrahamScanDriverContainer points={points} step={ADD_NEXT_POINT} />);
      wrapper.instance().nextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call fixRightTurn if current step is ${ADD_NEXT_POINT} and there is a right turn`, () => {
      const fixRightTurnSpy = jest.spyOn(GrahamScanDriverContainer.prototype, 'fixRightTurn');
      const points = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: -1, status: ACCEPTED },
        { x: 1, y: 2, status: NULL },
      ];
      const wrapper = shallow(<GrahamScanDriverContainer points={points} step={ADD_NEXT_POINT} />);
      wrapper.instance().nextStep();

      expect(fixRightTurnSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${FIX_RIGHT_TURN}`, () => {
      const addNextPointSpy = jest.spyOn(GrahamScanDriverContainer.prototype, 'addNextPoint');
      const wrapper = shallow(<GrahamScanDriverContainer step={FIX_RIGHT_TURN} />);
      wrapper.instance().nextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call getStartPoint if current step is ${DONE}`, () => {
      const getStartPointSpy = jest.spyOn(GrahamScanDriverContainer.prototype, 'getStartPoint');
      const wrapper = shallow(<GrahamScanDriverContainer step={DONE} />);
      wrapper.instance().nextStep();

      expect(getStartPointSpy).toHaveBeenCalled();
    });
  });
});
