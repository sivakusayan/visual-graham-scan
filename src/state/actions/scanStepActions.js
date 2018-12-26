import {
  SET_GET_START_POINT,
  SET_SORT_POINTS,
  SET_ADD_NEXT_POINT,
  SET_FIX_RIGHT_TURN,
  SET_DONE,
} from '../actionTypes/scanStepActionTypes';

/**
 * Generates an action to tell the Graham Scan
 * to find the start point.
 *
 * @return {{ type: SET_GET_START_POINT }}
 */
export const getStartPoint = () => ({
  type: SET_GET_START_POINT,
});

/**
 * Generates an action to tell the Graham Scan to
 * sort points with respect to their angle with the
 * start point.
 *
 * @return {{ type: SET_SORT_POINTS }}
 */
export const sortPoints = () => ({
  type: SET_SORT_POINTS,
});

/**
 * Generates an action to tell the Graham Scan
 * to add the next point to the convex hull.
 *
 * @return {{ type: SET_ADD_NEXT_POINT }}
 */
export const addNextPoint = () => ({
  type: SET_ADD_NEXT_POINT,
});

/**
 * Generates an action to tell the Graham Scan
 * to fix a right turn that has occured in the
 * convex hull.
 *
 * @return {{ type: SET_FIX_RIGHT_TURN }}
 */
export const fixRightTurn = () => ({
  type: SET_FIX_RIGHT_TURN,
});

/**
 * Generates an action to let Graham Scan
 * know that it is done.
 *
 * @return {{ type: SET_DONE }}
 */
export const done = () => ({
  type: SET_DONE,
});
