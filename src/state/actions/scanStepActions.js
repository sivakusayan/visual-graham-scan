import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../actionTypes/scanStepActionTypes';

/**
 * Generates an action to tell the Graham Scan
 * to find the start point.
 *
 * @return {{ type: GET_START_POINT }}
 */
export const getStartPoint = () => ({
  type: GET_START_POINT,
});

/**
 * Generates an action to tell the Graham Scan to
 * sort points with respect to their angle with the
 * start point.
 *
 * @return {{ type: SORT_POINTS }}
 */
export const sortPoints = () => ({
  type: SORT_POINTS,
});

/**
 * Generates an action to tell the Graham Scan
 * to add the next point to the convex hull.
 *
 * @return {{ type: ADD_NEXT_POINT }}
 */
export const addNextPoint = () => ({
  type: ADD_NEXT_POINT,
});

/**
 * Generates an action to tell the Graham Scan
 * to fix a right turn that has occured in the
 * convex hull.
 *
 * @return {{ type: FIX_RIGHT_TURN }}
 */
export const fixRightTurn = () => ({
  type: FIX_RIGHT_TURN,
});

/**
 * Generates an action to let Graham Scan
 * know that it is done.
 *
 * @return {{ type: DONE }}
 */
export const done = () => ({
  type: DONE,
});
