import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../actionTypes/pointActionTypes';
const initialState = [];

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_POINT):
      return state.concat(action.point);
    case (ACCEPT_POINT):
      return state.map((point) => {
        if (point.id === action.id) {
          return {
            ...point,
            status: 'accepted',
          };
        }
        return point;
      });
    case (REJECT_POINT):
      return state.map((point) => {
        if (point.id === action.id) {
          return {
            ...point,
            status: 'rejected',
          };
        }
        return point;
      });
    case (CLEAR_POINTS):
      return [];
    default:
      return state;
  }
};

export default pointsReducer;
