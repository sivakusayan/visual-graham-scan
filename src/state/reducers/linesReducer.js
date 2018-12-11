import {
  ADD_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../actionTypes/lineActionTypes';

const initialState = [];

const linesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_LINE:
      return state.concat(action.line);
    case REMOVE_LINE:
      return state.filter(line => line.id !== action.id);
    case CLEAR_LINES:
      return [];
    default:
      return state;
  }
};

export default linesReducer;
