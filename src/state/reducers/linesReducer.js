import uuid from 'uuid';

import {
  ADD_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../actionTypes/lineActionTypes';

const initialState = [];

const linesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINE:
      return state.concat({
        startPoint: action.startPoint,
        endPoint: action.endPoint,
        name: uuid(),
      });
    case REMOVE_LINE:
      return state.filter(line => line.name !== action.name);
    case CLEAR_LINES:
      return [];
    default:
      return state;
  }
};

export default linesReducer;
