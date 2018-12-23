import {
  START_SCAN,
  STOP_SCAN,
} from '../actionTypes/scanIsActiveActionTypes';

const initialState = false;

const scanIsActiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case (START_SCAN):
      return true;
    case (STOP_SCAN):
      return false;
    default:
      return state;
  }
};

export default scanIsActiveReducer;
