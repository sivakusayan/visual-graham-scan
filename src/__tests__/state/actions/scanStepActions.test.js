import {
  getStartPoint,
  sortPoints,
  addNextPoint,
  fixRightTurn,
  done,
} from '../../../state/actions/scanStepActions';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../../state/actionTypes/scanStepActionTypes';

describe('ScanStep Action Generators', () => {
  it(`should create an action to set algorithm step to ${GET_START_POINT}`, () => {
    const action = {
      type: GET_START_POINT,
    };

    expect(getStartPoint()).toEqual(action);
  });
  it(`should create an action to set algorithm step to ${SORT_POINTS}`, () => {
    const action = {
      type: SORT_POINTS,
    };

    expect(sortPoints()).toEqual(action);
  });
  it(`should create an action to set algorithm step to ${ADD_NEXT_POINT}`, () => {
    const action = {
      type: ADD_NEXT_POINT,
    };

    expect(addNextPoint()).toEqual(action);
  });
  it(`should create an action to set algorithm step to ${FIX_RIGHT_TURN}`, () => {
    const action = {
      type: FIX_RIGHT_TURN,
    };

    expect(fixRightTurn()).toEqual(action);
  });

  it(`should create an action to set algorithm step to ${DONE}`, () => {
    const action = {
      type: DONE,
    };

    expect(done()).toEqual(action);
  });
});
