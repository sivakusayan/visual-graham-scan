import {
  ACTIVATE_SCAN,
  DEACTIVATE_SCAN,
} from '../actionTypes/scanIsActiveActionTypes';

const initialState = false;

const scanIsActiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ACTIVATE_SCAN):
      return true;
    case (DEACTIVATE_SCAN):
      return false;
    default:
      return state;
  }
};

export default scanIsActiveReducer;
