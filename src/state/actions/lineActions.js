import {
  ADD_LINE,
  FIND_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../actionTypes/lineActionTypes';

/**
 * Creates an action to add a line
 *
 * @param {Line} line
 *  The line to add
 *
 * @returns {{ type: ADD_LINE, line: Line }}
 */
export const addLine = line => ({
  type: ADD_LINE,
  line,
});

/**
 * Creates an action to find a line by ID
 *
 * @param {Number} id
 *  The ID of the line to search for
 *
 * @returns {{ type: FIND_LINE, id: Number }}
 */
export const findLine = id => ({
  type: FIND_LINE,
  id,
});

/**
 * Creates an action to remove a line by ID
 *
 * @param {Number} id
 *  The ID of the line to remove
 *
 * @returns {{ type: REMOVE_LINE, id: Number }}
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
