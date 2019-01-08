/**
 * @fileoverview Contains configuration data for how points are displayed on
 * the stage.
 */

import { ACCEPTED, REJECTED } from './POINT_STATUSES';

export default {
  RADIUS: window.innerWidth > 600 ? 7 : 5,
  GET_FILL: (status) => {
    if (status === ACCEPTED) return '#23CE6B';
    if (status === REJECTED) return '#FF6F59';
    return '#414747';
  },
  GET_STROKE: (status) => {
    if (status === ACCEPTED) return '#1DA958';
    if (status === REJECTED) return '#D15B49';
    return '#272D2D';
  },
  strokeWidth: 0.1,
};
