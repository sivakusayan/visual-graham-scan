import {
  SET_GET_START_POINT,
  SET_SORT_POINTS,
  SET_ADD_NEXT_POINT,
  SET_FIX_RIGHT_TURN,
  SET_DONE,
} from '../actionTypes/scanStepActionTypes';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../__constants__/SCAN_STEPS';

const initialState = null;

const scanStepReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_GET_START_POINT):
      return GET_START_POINT;
    case (SET_SORT_POINTS):
      return SORT_POINTS;
    case (SET_ADD_NEXT_POINT):
      return ADD_NEXT_POINT;
    case (SET_FIX_RIGHT_TURN):
      return FIX_RIGHT_TURN;
    case (SET_DONE):
      return DONE;
    default:
      return state;
  }
};

export default scanStepReducer;
