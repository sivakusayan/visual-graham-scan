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
  let point1;
  let point2;
  let point3;
  let dummyPoints;
  beforeEach(() => {
    point1 = {
      x: 0, y: 0, name: 1, status: NULL,
    };
    point2 = {
      x: 0, y: 1, name: 2, status: NULL,
    };
    point3 = {
      x: 0, y: -1, name: 3, status: NULL,
    };

    dummyPoints = [point1, point2, point3];
  });

  it('should initialize currentPoint to 0', () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    expect(wrapper.state('currentPoint')).toBe(0);
  });
  it('should initialize the startPoint to null', () => {
    const wrapper = shallow(<GrahamScanDriverContainer />);
    expect(wrapper.state('startPoint')).toEqual(null);
  });
  it('should not call activateScan if startScan is called while points array is empty', () => {
    const activateScanSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        points={[]}
        activateScan={activateScanSpy}
      />,
    );
    wrapper.instance().startScan();

    expect(activateScanSpy).toHaveBeenCalledTimes(0);
  });
  it('should call activateScan if startScan is called while points array is empty', () => {
    const activateScanSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        points={dummyPoints}
        activateScan={activateScanSpy}
      />,
    );
    wrapper.instance().startScan();

    expect(activateScanSpy).toHaveBeenCalled();
  });
  it('should dispatch an action to clear lines when getStartPoint is called', () => {
    const clearLinesSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        points={dummyPoints}
        clearLines={clearLinesSpy}
      />,
    );
    wrapper.instance().getStartPoint();
    expect(clearLinesSpy).toHaveBeenCalled();
  });
  it('should call setGetStartPoint when getStartPoint is called', () => {
    const setGetStartPointSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        setGetStartPoint={setGetStartPointSpy}
        points={dummyPoints}
      />,
    );
    wrapper.instance().getStartPoint();

    expect(setGetStartPointSpy).toHaveBeenCalled();
  });
  it('should call setSortPoints when sortPoints is called', () => {
    const setSortPointsSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        setSortPoints={setSortPointsSpy}
        points={dummyPoints}
      />,
    );
    wrapper.instance().sortPoints();

    expect(setSortPointsSpy).toHaveBeenCalled();
  });
  it('should call setAddNextPoint when addNextPoint is called', () => {
    const setAddNextPointSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        setAddNextPoint={setAddNextPointSpy}
        points={dummyPoints}
      />,
    );
    wrapper.instance().addNextPoint();

    expect(setAddNextPointSpy).toHaveBeenCalled();
  });
  it('should increment currentPoint by 1 whenever addNextPoint is called', () => {
    const wrapper = shallow(<GrahamScanDriverContainer points={dummyPoints} />);

    const originalValue = wrapper.state('currentPoint');
    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();
    const newValue = wrapper.state('currentPoint');

    expect(newValue).toBe(originalValue + 2);
  });
  it('should not increment currentPoint out of array bounds when addNextPoint is called', () => {
    const wrapper = shallow(<GrahamScanDriverContainer points={dummyPoints} />);

    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();

    expect(wrapper.state('currentPoint')).toBe(2);
  });
  it('should call setDone when addNextPoint is called and currentPoint is at array\'s end', () => {
    const setDoneSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        setDone={setDoneSpy}
        points={dummyPoints}
      />,
    );

    wrapper.instance().addNextPoint();
    wrapper.instance().addNextPoint();

    expect(setDoneSpy).toHaveBeenCalled();
  });
  it('should call setFixRightTurn when fixRightTurn is called', () => {
    const setFixRightTurnSpy = jest.fn();
    const wrapper = shallow(
      <GrahamScanDriverContainer
        setFixRightTurn={setFixRightTurnSpy}
        points={dummyPoints}
      />,
    );
    wrapper.instance().fixRightTurn();

    expect(setFixRightTurnSpy).toHaveBeenCalled();
  });
  describe('nextStep function', () => {
    it(`should call sortPoints if current step is ${GET_START_POINT}`, () => {
      const wrapper = shallow(
        <GrahamScanDriverContainer
          points={dummyPoints}
          step={GET_START_POINT}
        />,
      );
      const sortPointsSpy = jest.spyOn(wrapper.instance(), 'sortPoints');
      wrapper.instance().nextStep();

      expect(sortPointsSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${SORT_POINTS}`, () => {
      const wrapper = shallow(
        <GrahamScanDriverContainer
          points={dummyPoints}
          step={SORT_POINTS}
        />,
      );
      const addNextPointSpy = jest.spyOn(wrapper.instance(), 'addNextPoint');
      wrapper.instance().nextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${ADD_NEXT_POINT} and there is no right turn`, () => {
      const points = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: 1, status: ACCEPTED },
        { x: 1, y: 2, status: NULL },
      ];
      const wrapper = shallow(<GrahamScanDriverContainer points={points} step={ADD_NEXT_POINT} />);
      const addNextPointSpy = jest.spyOn(wrapper.instance(), 'addNextPoint');
      wrapper.instance().nextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call fixRightTurn if current step is ${ADD_NEXT_POINT} and there is a right turn`, () => {
      const points = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: -1, status: ACCEPTED },
        { x: 1, y: 2, status: NULL },
      ];
      const wrapper = shallow(<GrahamScanDriverContainer points={points} step={ADD_NEXT_POINT} />);
      const fixRightTurnSpy = jest.spyOn(wrapper.instance(), 'fixRightTurn');
      wrapper.instance().nextStep();

      expect(fixRightTurnSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${FIX_RIGHT_TURN}`, () => {
      const wrapper = shallow(
        <GrahamScanDriverContainer
          points={dummyPoints}
          step={FIX_RIGHT_TURN}
        />,
      );
      const addNextPointSpy = jest.spyOn(wrapper.instance(), 'addNextPoint');
      wrapper.instance().nextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call getStartPoint if current step is ${DONE}`, () => {
      const wrapper = shallow(<GrahamScanDriverContainer points={dummyPoints} step={DONE} />);
      const getStartPointSpy = jest.spyOn(wrapper.instance(), 'getStartPoint');

      wrapper.instance().nextStep();
      expect(getStartPointSpy).toHaveBeenCalled();
    });
  });
});
