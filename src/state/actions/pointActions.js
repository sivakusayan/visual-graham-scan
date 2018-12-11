import {
  ADD_POINT,
  FIND_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../actionTypes/pointActionTypes';

/**
 * Creates a request to add a point. The
 * point should not have a defined status,
 * as we will not be adding any points
 * mid-algorithm.
 *
 * @param {Point} point
 */
export const addPoint = point => ({
  type: ADD_POINT,
  point,
});

export const findPoint = id => ({

});

export const acceptPoint = id => ({

});

export const rejectPoint = id => ({

});

export const clearPoints = id => ({

});
