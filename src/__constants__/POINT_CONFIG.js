/**
 * @fileoverview Contains configuration data for how points are displayed on
 * the stage.
 */

import { ACCEPTED, REJECTED } from './POINT_STATUSES';

export default {
  RADIUS: 7,
  fillLinearGradientStartPoint: { x: -50, y: -50 },
  fillLinearGradientEndPoint: { x: 50, y: 50 },
  GET_GRADIENT_FILL: (status) => {
    if (status === ACCEPTED) return [0, '#23CE6B', 1, '#87E4AE'];
    if (status === REJECTED) return [0, '#FF6F59', 1, '#FFB0A4'];
    return [0, '#272D2D', 1, '#B0B2B2'];
  },
  shadowColor: '#272D2D',
  shadowBlur: 10,
  shadowOffset: { x: 2, y: 2 },
  shadowOpacity: 0.07,
  GET_STROKE: (status) => {
    if (status === ACCEPTED) return '#1DA958';
    if (status === REJECTED) return '#D15B49';
    return '#202525';
  },
  strokeWidth: 0.1,
};
