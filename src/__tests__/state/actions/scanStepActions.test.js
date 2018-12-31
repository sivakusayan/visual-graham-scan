import {
  setGetStartPoint,
  setSortPoints,
  setAddNextPoint,
  setFixRightTurn,
  setDone,
} from '../../../state/actions/scanStepActions';
import {
  SET_GET_START_POINT,
  SET_SORT_POINTS,
  SET_ADD_NEXT_POINT,
  SET_FIX_RIGHT_TURN,
  SET_DONE,
} from '../../../state/actionTypes/scanStepActionTypes';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../../__constants__/SCAN_STEPS';

describe('ScanStep Action Creators', () => {
  it(`should create an action to set algorithm step to ${GET_START_POINT}`, () => {
    const action = {
      type: SET_GET_START_POINT,
    };

    expect(setGetStartPoint()).toEqual(action);
  });
  it(`should create an action to set algorithm step to ${SORT_POINTS}`, () => {
    const action = {
      type: SET_SORT_POINTS,
    };

    expect(setSortPoints()).toEqual(action);
  });
  it(`should create an action to set algorithm step to ${ADD_NEXT_POINT}`, () => {
    const action = {
      type: SET_ADD_NEXT_POINT,
    };

    expect(setAddNextPoint()).toEqual(action);
  });
  it(`should create an action to set algorithm step to ${FIX_RIGHT_TURN}`, () => {
    const action = {
      type: SET_FIX_RIGHT_TURN,
    };

    expect(setFixRightTurn()).toEqual(action);
  });

  it(`should create an action to set algorithm step to ${DONE}`, () => {
    const action = {
      type: SET_DONE,
    };

    expect(setDone()).toEqual(action);
  });
});
