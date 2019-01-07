// Note that the testing of the actual algorithm implementation will not be tested
// here. Rather, we test that the right functions are called and the correct scan
// step changes are made when makeNextStep is called. See __tests__/algorithm for tests
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
import DriverContainer from '../../containers/DriverContainer';

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
      const wrapper = shallow(<DriverContainer />);
      expect(wrapper.state('nextPointIndex')).toBe(0);
    });
    it('should initialize the startPoint to null', () => {
      const wrapper = shallow(<DriverContainer />);
      expect(wrapper.state('startPoint')).toEqual(null);
    });
    it('should bind onKeyNextStep to the keydown listener', () => {
      global.document.addEventListener = jest.fn();
      const wrapper = shallow(<DriverContainer />);
      const { onKeyDownNextStep } = wrapper.instance();
      expect(global.document.addEventListener).toHaveBeenCalledWith('keydown', onKeyDownNextStep);
    });
  });
  describe('Starting and Exiting Scan', () => {
    it('should disable edits after startScan is called', () => {
      const deactivateEditsSpy = jest.fn();
      const wrapper = shallow(
        <DriverContainer
          points={dummyPoints}
          deactivateEdits={deactivateEditsSpy}
        />,
      );

      wrapper.instance().startScan();

      expect(deactivateEditsSpy).toHaveBeenCalled();
    });
    it('should initialize state after startScan is called', () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);
      const initSpy = jest.spyOn(wrapper.instance(), 'init');

      wrapper.instance().startScan();

      expect(initSpy).toHaveBeenCalled();
    });
    it('should enable edits after endScan is called', () => {
      const activateEditsSpy = jest.fn();
      const wrapper = shallow(<DriverContainer activateEdits={activateEditsSpy} />);

      wrapper.instance().endScan();

      expect(activateEditsSpy).toHaveBeenCalled();
    });
  });
  describe('Step Changing', () => {
    it(`should set step to be ${GET_START_POINT} when getStartPoint is called`, () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);

      wrapper.instance().getStartPoint();

      expect(wrapper.state('step')).toBe(GET_START_POINT);
    });
    it(`should set step to be ${SORT_POINTS} when sortPoints is called`, () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);

      wrapper.instance().sortPoints();

      expect(wrapper.state('step')).toBe(SORT_POINTS);
    });
    it(`should set step to be ${ADD_NEXT_POINT} when addNextPoint is called`, () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);

      wrapper.instance().addNextPoint();

      expect(wrapper.state('step')).toBe(ADD_NEXT_POINT);
    });
    it(`should set step to be ${FIX_RIGHT_TURN} when fixRightTurn is called`, () => {
      const convexHull = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: 1, status: ACCEPTED },
      ];
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);

      wrapper.setState({ convexHull });
      wrapper.instance().fixRightTurn();

      expect(wrapper.state('step')).toBe(FIX_RIGHT_TURN);
    });
  });
  describe('NextPointIndex Manipulation', () => {
    it('should increment nextPointIndex by 1 whenever addNextPoint is called', () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);

      const originalValue = wrapper.state('nextPointIndex');
      wrapper.instance().addNextPoint();
      wrapper.instance().addNextPoint();
      const newValue = wrapper.state('nextPointIndex');

      expect(newValue).toBe(originalValue + 2);
    });
    it('should call endScan after addNextPoint is called and nextPointIndex can\'t go higher', () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);
      const endScanSpy = jest.spyOn(wrapper.instance(), 'endScan');

      wrapper.instance().addNextPoint();
      wrapper.instance().addNextPoint();
      wrapper.instance().addNextPoint();

      expect(endScanSpy).toHaveBeenCalled();
    });
  });
  describe('makeNextStep function', () => {
    it(`should call sortPoints if current step is ${GET_START_POINT}`, () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);
      const sortPointsSpy = jest.spyOn(wrapper.instance(), 'sortPoints');

      wrapper.setState({ step: GET_START_POINT });
      wrapper.instance().makeNextStep();

      expect(sortPointsSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${SORT_POINTS}`, () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);
      const addNextPointSpy = jest.spyOn(wrapper.instance(), 'addNextPoint');

      wrapper.setState({ step: SORT_POINTS });
      wrapper.instance().makeNextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${ADD_NEXT_POINT} and there is no right turn`, () => {
      const convexHull = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: -1, status: ACCEPTED },
      ];
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);
      const addNextPointSpy = jest.spyOn(wrapper.instance(), 'addNextPoint');

      wrapper.setState({ convexHull, step: ADD_NEXT_POINT });
      wrapper.instance().makeNextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
    it(`should call fixRightTurn if current step is ${ADD_NEXT_POINT} and there is a right turn`, () => {
      const convexHull = [
        { x: 0, y: 0, status: ACCEPTED },
        { x: 1, y: 0, status: ACCEPTED },
        { x: 1, y: 1, status: ACCEPTED },
      ];
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);
      const fixRightTurnSpy = jest.spyOn(wrapper.instance(), 'fixRightTurn');

      wrapper.setState({ convexHull, step: ADD_NEXT_POINT });
      wrapper.instance().makeNextStep();

      expect(fixRightTurnSpy).toHaveBeenCalled();
    });
    it(`should call addNextPoint if current step is ${FIX_RIGHT_TURN}`, () => {
      const wrapper = shallow(<DriverContainer points={dummyPoints} />);
      const addNextPointSpy = jest.spyOn(wrapper.instance(), 'addNextPoint');

      wrapper.setState({ step: FIX_RIGHT_TURN });
      wrapper.instance().makeNextStep();

      expect(addNextPointSpy).toHaveBeenCalled();
    });
  });
});
