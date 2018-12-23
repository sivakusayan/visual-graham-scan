import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../actionTypes/scanStepActionTypes';
import scanStepReducer from '../scanStepReducer';

describe('ScanStep Reducer', () => {
  const initialState = DONE;

  it(`Should set the current step to ${GET_START_POINT}`, () => {
    const action = {
      type: GET_START_POINT,
    };
    expect(scanStepReducer(initialState, action)).toBe(GET_START_POINT);
  });
  it(`Should set the current step to ${SORT_POINTS}`, () => {
    const action = {
      type: SORT_POINTS,
    };
    expect(scanStepReducer(initialState, action)).toBe(SORT_POINTS);
  });
  it(`Should set the current step to ${ADD_NEXT_POINT}`, () => {
    const action = {
      type: ADD_NEXT_POINT,
    };
    expect(scanStepReducer(initialState, action)).toBe(ADD_NEXT_POINT);
  });
  it(`Should set the current step to ${FIX_RIGHT_TURN}`, () => {
    const action = {
      type: FIX_RIGHT_TURN,
    };
    expect(scanStepReducer(initialState, action)).toBe(FIX_RIGHT_TURN);
  });
  it(`Should set the current step to ${DONE}`, () => {
    const currentState = FIX_RIGHT_TURN;
    const action = {
      type: DONE,
    };
    expect(scanStepReducer(currentState, action)).toBe(DONE);
  });
});
