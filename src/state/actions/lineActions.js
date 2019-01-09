import {
  ADD_LINE,
  SET_ERROR_LINE,
  CLEAR_ERROR_LINES,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../actionTypes/lineActionTypes';

/**
 * Creates an action to add a line
 *
 * @param startPoint
 *  The point on the canvas the line starts from
 * @param endPoint
 *  The point on the canvas the line ends at
 *
 * @return {type: ADD_LINE, startPoint: Point, endPoint: Point}
 */
export const addLine = (startPoint, endPoint) => ({
  type: ADD_LINE,
  startPoint,
  endPoint,
});

/**
 * Creates an action to remove a line
 *
 * @param startPoint
 *  The point on the canvas the line starts from
 * @param endPoint
 *  The point on the canvas the line ends at
 *
 * @return {type: REMOVE_LINE, startPoint: Point, endPoint: Point}
 */
export const removeLine = (startPoint, endPoint) => ({
  type: REMOVE_LINE,
  startPoint,
  endPoint,
});

/**
 * Creates an action to clear all lines
 *
 * @returns {{ type: CLEAR_LINES }}
 */
export const clearLines = () => ({
  type: CLEAR_LINES,
});
