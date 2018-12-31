import { ACTIVATE_AUTO, DEACTIVATE_AUTO } from '../actionTypes/scanIsAutoActionTypes';

const initialState = false;

const scanIsAutoReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ACTIVATE_AUTO):
      return true;
    case (DEACTIVATE_AUTO):
      return false;
    default:
      return state;
  }
};

export default scanIsAutoReducer;
