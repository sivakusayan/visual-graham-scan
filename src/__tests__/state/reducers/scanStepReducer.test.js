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
import scanStepReducer from '../../../state/reducers/scanStepReducer';

describe('ScanStep Reducer', () => {
  const initialState = DONE;

  it(`Should set the current step to ${GET_START_POINT}`, () => {
    const action = {
      type: SET_GET_START_POINT,
    };
    expect(scanStepReducer(initialState, action)).toBe(GET_START_POINT);
  });
  it(`Should set the current step to ${SORT_POINTS}`, () => {
    const action = {
      type: SET_SORT_POINTS,
    };
    expect(scanStepReducer(initialState, action)).toBe(SORT_POINTS);
  });
  it(`Should set the current step to ${ADD_NEXT_POINT}`, () => {
    const action = {
      type: SET_ADD_NEXT_POINT,
    };
    expect(scanStepReducer(initialState, action)).toBe(ADD_NEXT_POINT);
  });
  it(`Should set the current step to ${FIX_RIGHT_TURN}`, () => {
    const action = {
      type: SET_FIX_RIGHT_TURN,
    };
    expect(scanStepReducer(initialState, action)).toBe(FIX_RIGHT_TURN);
  });
  it(`Should set the current step to ${DONE}`, () => {
    // Note that initialState is originally DONE, which is why we set a
    // different state to check if reducer works properly
    const currentState = FIX_RIGHT_TURN;
    const action = {
      type: SET_DONE,
    };
    expect(scanStepReducer(currentState, action)).toBe(DONE);
  });
});
