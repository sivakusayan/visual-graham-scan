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
} from '../../__constants__/SCAN_STEPS';
import { NULL, ACCEPTED } from '../../__constants__/POINT_STATUSES';
import UUID_MOCK_ID from '../__constants__/UUID_MOCK_ID';
import GrahamScanDriverContainer from '../../containers/GrahamScanDriverContainer';

describe('Scan Driver Logic', () => {
  let point1;
  let point2;
  let point3;
  let dummyPoints;
  beforeEach(() => {
    point1 = {
      x: 0, y: 0, name: UUID_MOCK_ID, status: NULL,
    };
    point2 = {
      x: 0, y: 1, name: UUID_MOCK_ID, status: NULL,
    };
    point3 = {
      x: 0, y: -1, name: UUID_MOCK_ID, status: NULL,
    };

    dummyPoints = [point1, point2, point3];
  });
  describe('Initialization', () => {
    it('should initialize nextPointIndex to 0', () => {
      const wrapper = shallow(<GrahamScanDriverContainer />);
      expect(wrapper.state('nextPointIndex')).toBe(0);
    });
    it('should initialize the startPoint to null', () => {
      const wrapper = shallow(<GrahamScanDriverContainer />);
      expect(wrapper.state('startPoint')).toEqual(null);
    });
    it('should bind onKeyNextStep to the keydown listener', () => {
      global.document.addEventListener = jest.fn();
      const wrapper = shallow(<GrahamScanDriverContainer />);
      const { onKeyDownNextStep } = wrapper.instance();
      expect(global.document.addEventListener).toHaveBeenCalledWith('keydown', onKeyDownNextStep);
    });
  });
  describe('Step Changing', () => {
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
    it('should call setFixRightTurn when fixRightTurn is called', () => {
      const setFixRightTurnSpy = jest.fn();
      const convexHull = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: 1, status: ACCEPTED },
      ];
      const wrapper = shallow(
        <GrahamScanDriverContainer
          setFixRightTurn={setFixRightTurnSpy}
          points={dummyPoints}
        />,
      );
      wrapper.setState({ convexHull });
      wrapper.instance().fixRightTurn();
  
      expect(setFixRightTurnSpy).toHaveBeenCalled();
    });
  });
  describe('State Boundary Conditions', () => {
    it('should increment nextPointIndex by 1 whenever addNextPoint is called', () => {
      const wrapper = shallow(<GrahamScanDriverContainer points={dummyPoints} />);

      const originalValue = wrapper.state('nextPointIndex');
      wrapper.instance().addNextPoint();
      wrapper.instance().addNextPoint();
      const newValue = wrapper.state('nextPointIndex');

      expect(newValue).toBe(originalValue + 2);
    });
    it('should call setDone after addNextPoint is called and nextPointIndex equal to the number of points', () => {
      const setDoneSpy = jest.fn();
      const wrapper = shallow(
        <GrahamScanDriverContainer
          setDone={setDoneSpy}
          points={dummyPoints}
        />,
      );
  
      wrapper.instance().addNextPoint();
      wrapper.instance().addNextPoint();
      wrapper.instance().addNextPoint();
  
      expect(setDoneSpy).toHaveBeenCalled();
    });
  });
  describe('Play Functions', () => {
    it('should deactivate edits when play is called', () => {
      const deactivateEditsSpy = jest.fn();
      const wrapper = shallow(<GrahamScanDriverContainer deactivateEdits={deactivateEditsSpy} />);

      wrapper.instance().play();
      expect(deactivateEditsSpy).toHaveBeenCalled();
    });
    it('calling play won\'t restart the scan while isActive is true', () => {
      const wrapper = shallow(<GrahamScanDriverContainer isActive />);
      const startScanSpy = jest.spyOn(wrapper.instance(), 'startScan');

      wrapper.instance().play();

      expect(startScanSpy).toHaveBeenCalledTimes(0);
    });
    it('should deactivate edits when playAuto is called', () => {
      const deactivateEditsSpy = jest.fn();
      const wrapper = shallow(<GrahamScanDriverContainer deactivateEdits={deactivateEditsSpy} />);

      wrapper.instance().playAuto();
      expect(deactivateEditsSpy).toHaveBeenCalled();
    });
    it('calling playAuto won\'t restart the scan while isActive is true', () => {
      const wrapper = shallow(<GrahamScanDriverContainer isActive />);
      const startScanSpy = jest.spyOn(wrapper.instance(), 'startScan');

      wrapper.instance().playAuto();

      expect(startScanSpy).toHaveBeenCalledTimes(0);
    });
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
      const convexHull = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: -1, status: ACCEPTED },
      ];
      const wrapper = shallow(
        <GrahamScanDriverContainer
          points={dummyPoints}
          step={ADD_NEXT_POINT}
        />,
      );
      wrapper.setState({
        convexHull,
      });
      const addNextPointSpy = jest.spyOn(wrapper.instance(), 'addNextPoint');
      wrapper.instance().nextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call fixRightTurn if current step is ${ADD_NEXT_POINT} and there is a right turn`, () => {
      const convexHull = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: 1, status: ACCEPTED },
      ];
      const wrapper = shallow(
        <GrahamScanDriverContainer
          points={dummyPoints}
          step={ADD_NEXT_POINT}
        />,
      );
      wrapper.setState({ convexHull });
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
  });
});
