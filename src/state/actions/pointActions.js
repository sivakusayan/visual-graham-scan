import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../actionTypes/pointActionTypes';

/**
 * Creates an action to add a point. The point should not have a
 * defined status, as we will not be adding any points mid-algorithm.
 *
 * @param {Point} point
 *  The point to add
 *
 * @returns {{ type: ADD_POINT, point: Point}}
 */
export const addPoint = point => ({
  type: ADD_POINT,
  point,
});

/**
 * Creates an action to find accept a point by ID.
 *
 * @param {Number} id
 *  The ID of the point to accept
 *
 * @returns {{ type: ACCEPT_POINT, id: Number}}
 */
export const acceptPoint = id => ({
  type: ACCEPT_POINT,
  id,
});

/**
 * Creates an action to reject a point by ID.
 *
 * @param {Number} id
 *  The ID of the point to reject
 *
 * @returns {{ type: REJECT_POINT, id: Number}}
 */
export const rejectPoint = id => ({
  type: REJECT_POINT,
  id,
});

/**
 * Creates an action to clear every point.
 *
 * @returns {{ type: CLEAR_POINTS }}
 */
export const clearPoints = () => ({
  type: CLEAR_POINTS,
});
