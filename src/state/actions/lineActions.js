import {
  ADD_LINE,
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
 * Creates an action to remove a line by ID
 *
 * @param {Number} name
 *  The ID of the line to remove
 *
 * @returns {{ type: REMOVE_LINE, name: Number }}
 */
export const removeLine = name => ({
  type: REMOVE_LINE,
  name,
});

/**
 * Creates an action to clear all lines
 *
 * @returns {{ type: CLEAR_LINES }}
 */
export const clearLines = () => ({
  type: CLEAR_LINES,
});
