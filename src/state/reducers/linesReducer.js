import uuid from 'uuid';

import {
  ADD_LINE,
  SET_ERROR_LINE,
  REMOVE_LINE,
  CLEAR_ERROR_LINES,
  CLEAR_LINES,
} from '../actionTypes/lineActionTypes';
import { NULL, ERROR } from '../../__constants__/LINE_STATUSES';

const initialState = [];

const linesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINE:
      return state.concat({
        startPoint: action.startPoint,
        endPoint: action.endPoint,
        name: uuid(),
        status: NULL,
      });
    case SET_ERROR_LINE:
      return state.map((line) => {
        const match = (line.startPoint.name === action.startPoint.name
                        && line.endPoint.name === action.endPoint.name)
        return !match ? line : {
          ...line,
          status: ERROR,
        };
      });
    case CLEAR_ERROR_LINES:
      return state.filter(line => line.status !== ERROR);
    case CLEAR_LINES:
      return [];
    default:
      return state;
  }
};

export default linesReducer;
