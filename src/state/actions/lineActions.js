import {
  ADD_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../actionTypes/lineActionTypes';

/**
 * Creates an action to add a line
 *
 * @param {[Point]} points
 *  The points that describe the line to add
 *
 * @returns {{ type: ADD_LINE, points: [Point] }}
 */
export const addLine = ([points]) => ({
  type: ADD_LINE,
  points,
});

/**
 * Creates an action to remove a line by ID
 *
 * @param {Number} id
 *  The ID of the line to remove
 *
 * @returns {{ type: REMOVE_LINE, name: Number }}
 */
export const removeLine = id => ({
  type: REMOVE_LINE,
  id,
});

/**
 * Creates an action to clear all lines
 *
 * @returns {{ type: CLEAR_LINES }}
 */
export const clearLines = () => ({
  type: CLEAR_LINES,
});
