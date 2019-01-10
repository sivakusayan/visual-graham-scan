/**
 * @fileoverview Contains configuration data for how lines are displayed on
 * the stage.
 */

import { ERROR } from './LINE_STATUSES';


export default {
  GET_STROKE: (line) => {
    if (line.status === ERROR) return '#FF6F59';
    return '#272D2D';
  },
  fill: '#272D2D',
  dash: [33, 10],
};
