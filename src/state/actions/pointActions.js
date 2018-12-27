import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../actionTypes/pointActionTypes';
import { SORT_POINTS } from '../../__constants__/SCAN_STEPS';

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
 * @param {Number} name
 *  The ID of the point to accept
 *
 * @returns {{ type: ACCEPT_POINT, name: Number}}
 */
export const acceptPoint = name => ({
  type: ACCEPT_POINT,
  name,
});

/**
 * Creates an action to reject a point by ID.
 *
 * @param {Number} name
 *  The ID of the point to reject
 *
 * @returns {{ type: REJECT_POINT, name: Number}}
 */
export const rejectPoint = name => ({
  type: REJECT_POINT,
  name,
});

/**
 * Creates an action to clear every point.
 *
 * @returns {{ type: CLEAR_POINTS }}
 */
export const clearPoints = () => ({
  type: CLEAR_POINTS,
});

/**
 * Creates an action to sort the points with
 * respect to a single point, as is done in
 * the beginning of the Graham Scan algorithm.
 *
 * @param {Point} startPoint
 *  The point that is used as reference for angle
 *  calculations
 *
 * @returns {{ type: SORT_POINTS, startPoint: Point }}
 */
export const sortPoints = startPoint => ({
  type: SORT_POINTS,
  startPoint,
});
