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
  it('should dispatch an action to clear lines when getStartPoint is called');
  it(`should change scan step to ${GET_START_POINT} when getStartPoint is called`);
  it(`should change scan step to to ${SORT_POINTS} when sortPoints is called`);
  it(`should change scan step to ${ADD_NEXT_POINT} when addNextPoint is called`);
  it(`should change scan step to ${FIX_RIGHT_TURN} when fixRightTurn is called`);
  it(`should change scan step to ${DONE} when addNextPoint is called and every point is processed`);
  describe('nextStep function', () => {
    it(`should call sortPoints if previous step is ${GET_START_POINT}`);
    it(`should call addNextPoint if previous step is ${SORT_POINTS}`);
    it(`should call addNextPoint or fixRightTurn if previous step is ${ADD_NEXT_POINT}`);
    it(`should call addNextPoint if previous step is ${FIX_RIGHT_TURN}`);
    it(`should call getStartPoint if previous step is ${DONE}`);
  });
});
