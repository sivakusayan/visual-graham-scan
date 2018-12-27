import uuid from 'uuid';

import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
  SORT_POINTS,
} from '../actionTypes/pointActionTypes';
import { NULL, ACCEPTED, REJECTED } from '../../__constants__/POINT_STATUSES';
import sortPoints from '../../algorithm/helpers/sortPoints';

const initialState = [];

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_POINT):
      return state.concat({
        ...action.point,
        name: uuid(),
        status: NULL,
      });
    case (ACCEPT_POINT):
      return state.map((point) => {
        if (point.name === action.name) {
          return {
            ...point,
            status: ACCEPTED,
          };
        }
        return point;
      });
    case (REJECT_POINT):
      return state.map((point) => {
        if (point.name === action.name) {
          return {
            ...point,
            status: REJECTED,
          };
        }
        return point;
      });
    case (CLEAR_POINTS):
      return [];
    case (SORT_POINTS): {
      const stateCopy = JSON.parse(JSON.stringify(state));
      sortPoints(action.startPoint, stateCopy);
      return stateCopy;
    }
    default:
      return state;
  }
};

export default pointsReducer;
