import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../actionTypes/scanStepActionTypes';

const initialState = null;

const scanStepReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_START_POINT):
      return GET_START_POINT;
    case (SORT_POINTS):
      return SORT_POINTS;
    case (ADD_NEXT_POINT):
      return ADD_NEXT_POINT;
    case (FIX_RIGHT_TURN):
      return FIX_RIGHT_TURN;
    case (DONE):
      return DONE;
    default:
      return state;
  }
};

export default scanStepReducer;
